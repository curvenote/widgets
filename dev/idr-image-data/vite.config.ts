import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    lib: {
      entry: 'src/main.tsx',
      name: 'WidgetDev',
      fileName: 'widget',
      formats: ['es'], // ESM output
    },
    rollupOptions: {
      // external: ['react', 'react-dom'],
      output: {
        assetFileNames: 'widget.[ext]', // Ensures CSS is named properly
      },
    },
  },
});
