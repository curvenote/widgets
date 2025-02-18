import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  define: {
    'process.env': {},
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    lib: {
      entry: 'src/main.tsx',
      fileName: 'widget',
      formats: ['es'], // ESM output
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        assetFileNames: 'widget.[ext]', // Ensures CSS is named properly,
      },
    },
  },
});
