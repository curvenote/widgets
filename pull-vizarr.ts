#!/usr/bin/env node

/**
 * Asset Spider - Downloads a JavaScript/CSS asset and all its dependencies
 * 
 * Usage: npx tsx pull-vizarr.ts <url> [output-dir]
 * Example: npx tsx pull-vizarr.ts https://some.js ./vizarr-assets
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import { URL } from 'url';

interface DownloadQueueItem {
  url: string;
  localPath: string;
  baseUrl: string;
}

class AssetSpider {
  private downloaded = new Set<string>();
  private failed = new Set<string>();
  private queue: DownloadQueueItem[] = [];
  private outputDir: string;
  private baseDomain: string;

  constructor(outputDir: string) {
    this.outputDir = outputDir;
  }

  /**
   * Resolve a relative URL against a base URL
   */
  private resolveUrl(relativeUrl: string, baseUrl: string): string {
    try {
      return new URL(relativeUrl, baseUrl).href;
    } catch (e) {
      // Silently skip invalid URLs - they're likely not actual dependencies
      return '';
    }
  }

  /**
   * Extract the base URL from a full URL
   */
  private getBaseUrl(url: string): string {
    try {
      const urlObj = new URL(url);
      const dirname = path.dirname(urlObj.pathname);
      // Ensure base URL ends with / so relative paths resolve correctly
      const basePath = dirname.endsWith('/') ? dirname : `${dirname}/`;
      return `${urlObj.protocol}//${urlObj.host}${basePath}`;
    } catch (e) {
      console.error(`⚠️  Invalid URL format: ${url}`);
      return '';
    }
  }

  /**
   * Get the local file path for a URL
   */
  private getLocalPath(url: string, baseUrl: string): string {
    try {
      const urlObj = new URL(url);
      const relativePath = urlObj.pathname;
      const filename = path.basename(relativePath) || 'index.html';
      const dir = path.dirname(relativePath).replace(/^\//, '');
      
      // Preserve directory structure
      if (dir && dir !== '/') {
        return path.join(this.outputDir, dir, filename);
      }
      return path.join(this.outputDir, filename);
    } catch (e) {
      console.error(`⚠️  Failed to get local path for URL: ${url}`);
      return path.join(this.outputDir, 'unknown-file');
    }
  }

  /**
   * Download a file from URL
   */
  private async downloadFile(url: string): Promise<string> {
    if (this.downloaded.has(url)) {
      return '';
    }

    if (this.failed.has(url)) {
      return '';
    }

    console.log(`Downloading: ${url}`);

    try {
      // Create timeout signal (fallback for older Node versions)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
      
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          this.failed.add(url);
          console.error(`❌ Failed to download ${url}: HTTP ${response.status} ${response.statusText}`);
          return '';
        }
        
        const content = await response.text();
        this.downloaded.add(url); // Only mark as downloaded if successful
        return content;
      } finally {
        clearTimeout(timeoutId);
      }
    } catch (error: any) {
      this.failed.add(url);
      const errorMsg = error.message || String(error);
      const errorName = error.name || '';
      
      if (errorName === 'AbortError' || errorMsg.includes('timeout') || errorMsg.includes('aborted')) {
        console.error(`❌ Timeout downloading ${url}`);
      } else if (errorMsg.includes('ECONNREFUSED') || errorMsg.includes('ENOTFOUND') || errorMsg.includes('getaddrinfo')) {
        console.error(`❌ Network error downloading ${url}: ${errorMsg}`);
      } else {
        console.error(`❌ Failed to download ${url}: ${errorMsg}`);
      }
      return '';
    }
  }

  /**
   * Save content to a file
   */
  private async saveFile(filePath: string, content: string): Promise<boolean> {
    try {
      const dir = path.dirname(filePath);
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(filePath, content, 'utf-8');
      console.log(`✓ Saved: ${filePath}`);
      return true;
    } catch (error: any) {
      console.error(`❌ Failed to save file ${filePath}: ${error.message || String(error)}`);
      return false;
    }
  }

  /**
   * Extract JavaScript imports from content
   */
  private extractJsImports(content: string, baseUrl: string): string[] {
    const imports: string[] = [];
    
    try {
      // ES6 imports: handles both formatted and minified code
      // Examples: 
      //   import { x } from './file.js'
      //   import{version as d}from"./file.js"
      //   import './file.js'
      //   import"./file.js"
      // The pattern: import [optional specifiers] [optional 'from'] ['"](path)['"]
      const es6ImportRegex = /import\s*(?:(?:\{[^}]*\}|\*\s*as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s*as\s+\w+|\w+))?\s*from\s*)?['"]([^'"]+)['"]/g;
      
      // Dynamic imports: import('./file.js') or import("./file.js")
      const dynamicImportRegex = /import\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
      
      // CommonJS require: require('./file.js')
      const requireRegex = /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
      
      // Source map references
      const sourceMapRegex = /\/\/#\s*sourceMappingURL=([^\s]+)/g;
      
      // Match all patterns
      let match;
      
      while ((match = es6ImportRegex.exec(content)) !== null) {
        if (match[1] && !match[1].startsWith('http') && !match[1].startsWith('data:')) {
          imports.push(match[1]);
        }
      }
      
      while ((match = dynamicImportRegex.exec(content)) !== null) {
        if (match[1] && !match[1].startsWith('http') && !match[1].startsWith('data:')) {
          imports.push(match[1]);
        }
      }
      
      while ((match = requireRegex.exec(content)) !== null) {
        if (match[1] && !match[1].startsWith('http') && !match[1].startsWith('data:')) {
          imports.push(match[1]);
        }
      }
      
      while ((match = sourceMapRegex.exec(content)) !== null) {
        if (match[1] && !match[1].startsWith('http') && !match[1].startsWith('data:')) {
          imports.push(match[1]);
        }
      }
    } catch (error: any) {
      console.error(`⚠️  Error parsing JavaScript imports: ${error.message || String(error)}`);
    }
    
    return imports;
  }

  /**
   * Extract CSS imports and URLs from content
   */
  private extractCssImports(content: string, baseUrl: string): string[] {
    const imports: string[] = [];
    
    try {
      // @import statements
      const importRegex = /@import\s+(?:url\s*\(\s*)?['"]?([^'";)]+)['"]?\s*\)?/gi;
      
      // url() references in CSS
      const urlRegex = /url\s*\(\s*['"]?([^'")]+)['"]?\s*\)/gi;
      
      let match;
      
      while ((match = importRegex.exec(content)) !== null) {
        if (match[1] && !match[1].startsWith('http') && !match[1].startsWith('data:') && !match[1].startsWith('#')) {
          imports.push(match[1]);
        }
      }
      
      while ((match = urlRegex.exec(content)) !== null) {
        if (match[1] && !match[1].startsWith('http') && !match[1].startsWith('data:') && !match[1].startsWith('#')) {
          // Only include JS/CSS/image assets, skip data URIs and fragments
          const ext = path.extname(match[1].split('?')[0]).toLowerCase();
          if (['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.woff', '.woff2', '.ttf', '.eot'].includes(ext)) {
            imports.push(match[1]);
          }
        }
      }
    } catch (error: any) {
      console.error(`⚠️  Error parsing CSS imports: ${error.message || String(error)}`);
    }
    
    return imports;
  }

  /**
   * Extract HTML link/script tags (if we encounter HTML)
   */
  private extractHtmlAssets(content: string, baseUrl: string): string[] {
    const assets: string[] = [];
    
    try {
      // <link> tags for CSS
      const linkRegex = /<link[^>]+href\s*=\s*['"]([^'"]+)['"][^>]*>/gi;
      
      // <script> tags
      const scriptRegex = /<script[^>]+src\s*=\s*['"]([^'"]+)['"][^>]*>/gi;
      
      // <img> tags
      const imgRegex = /<img[^>]+src\s*=\s*['"]([^'"]+)['"][^>]*>/gi;
      
      let match;
      
      while ((match = linkRegex.exec(content)) !== null) {
        if (match[1] && !match[1].startsWith('http') && !match[1].startsWith('data:')) {
          assets.push(match[1]);
        }
      }
      
      while ((match = scriptRegex.exec(content)) !== null) {
        if (match[1] && !match[1].startsWith('http') && !match[1].startsWith('data:')) {
          assets.push(match[1]);
        }
      }
      
      while ((match = imgRegex.exec(content)) !== null) {
        if (match[1] && !match[1].startsWith('http') && !match[1].startsWith('data:')) {
          assets.push(match[1]);
        }
      }
    } catch (error: any) {
      console.error(`⚠️  Error parsing HTML assets: ${error.message || String(error)}`);
    }
    
    return assets;
  }

  /**
   * Process a file and extract dependencies
   */
  private async processFile(content: string, fileUrl: string, localPath: string): Promise<void> {
    try {
      const baseUrl = this.getBaseUrl(fileUrl);
      if (!baseUrl) {
        return; // Skip if we couldn't parse the base URL
      }

      const ext = path.extname(localPath).toLowerCase();
      const dependencies: string[] = [];

      if (ext === '.js' || ext === '.mjs' || ext === '.ts') {
        dependencies.push(...this.extractJsImports(content, baseUrl));
      } else if (ext === '.css') {
        dependencies.push(...this.extractCssImports(content, baseUrl));
      } else if (ext === '.html' || ext === '.htm') {
        dependencies.push(...this.extractHtmlAssets(content, baseUrl));
      }

      if (dependencies.length > 0) {
        console.log(`  Found ${dependencies.length} dependency(ies) in ${path.basename(localPath)}`);
      }

      // Queue all found dependencies
      for (const dep of dependencies) {
        try {
          const resolvedUrl = this.resolveUrl(dep, baseUrl);
          if (!resolvedUrl) {
            console.warn(`⚠️  Could not resolve dependency: ${dep} (from ${fileUrl})`);
            continue;
          }
          
          if (resolvedUrl.startsWith(this.baseDomain)) {
            const depLocalPath = this.getLocalPath(resolvedUrl, baseUrl);
            if (!this.downloaded.has(resolvedUrl) && !this.failed.has(resolvedUrl)) {
              console.log(`  → Queued: ${resolvedUrl}`);
              this.queue.push({
                url: resolvedUrl,
                localPath: depLocalPath,
                baseUrl: this.getBaseUrl(resolvedUrl),
              });
            } else {
              console.log(`  → Skipped (already processed): ${resolvedUrl}`);
            }
          } else {
            console.log(`  → Skipped (different domain): ${resolvedUrl}`);
          }
        } catch (error: any) {
          // Skip invalid dependency URLs, but continue processing
          console.warn(`⚠️  Skipping invalid dependency: ${dep} (from ${fileUrl}): ${error.message || String(error)}`);
        }
      }
    } catch (error: any) {
      console.error(`⚠️  Error processing file ${fileUrl}: ${error.message || String(error)}`);
      // Continue processing other files even if this one fails
    }
  }

  /**
   * Main spider function
   */
  async spider(startUrl: string): Promise<void> {
    try {
      const urlObj = new URL(startUrl);
      this.baseDomain = `${urlObj.protocol}//${urlObj.host}`;
    } catch (error: any) {
      throw new Error(`Invalid start URL: ${startUrl} - ${error.message}`);
    }
    
    // Initialize output directory
    try {
      await fs.mkdir(this.outputDir, { recursive: true });
    } catch (error: any) {
      throw new Error(`Failed to create output directory ${this.outputDir}: ${error.message}`);
    }
    
    // Add initial URL to queue
    const baseUrl = this.getBaseUrl(startUrl);
    if (!baseUrl) {
      throw new Error(`Failed to parse base URL from: ${startUrl}`);
    }
    
    const localPath = this.getLocalPath(startUrl, baseUrl);
    this.queue.push({
      url: startUrl,
      localPath,
      baseUrl,
    });

    // Process queue
    while (this.queue.length > 0) {
      const item = this.queue.shift()!;
      
      if (this.downloaded.has(item.url) || this.failed.has(item.url)) {
        continue;
      }

      try {
        const content = await this.downloadFile(item.url);
        if (content) {
          const saved = await this.saveFile(item.localPath, content);
          if (saved) {
            // Only process file if it was successfully saved
            await this.processFile(content, item.url, item.localPath);
          }
        }
      } catch (error: any) {
        // Log error but continue with next item in queue
        console.error(`❌ Unexpected error processing ${item.url}: ${error.message || String(error)}`);
        this.failed.add(item.url);
      }
    }

    const successCount = this.downloaded.size;
    console.log(`\n✓ Download complete! All assets saved to: ${this.outputDir}`);
    console.log(`  Successfully downloaded: ${successCount} files`);
    if (this.failed.size > 0) {
      console.log(`  Failed downloads: ${this.failed.size} files`);
      console.log(`  Failed URLs:`);
      for (const url of this.failed) {
        console.log(`    - ${url}`);
      }
    }
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: npx tsx pull-vizarr.ts <url> [output-dir]');
    console.error('Example: npx tsx pull-vizarr.ts https://nucleus.engineering/vizarr/index-DVrHvkYy.js ./vizarr-assets');
    process.exit(1);
  }

  const url = args[0];
  const outputDir = args[1] || './downloaded-assets';

  try {
    const spider = new AssetSpider(outputDir);
    await spider.spider(url);
  } catch (error: any) {
    console.error('❌ Fatal error:', error.message || String(error));
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

main();
