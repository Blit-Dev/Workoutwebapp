import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Ensure correct base path
  build: {
    outDir: 'dist', // Default output folder
    assetsDir: 'assets', // Asset directory
  },
  server: {
    port: 3000, // Set local dev server port
    open: true, // Open browser on start
  },
  resolve: {
    alias: {
      '@': '/src', // Example alias for cleaner imports
    },
  },
});

