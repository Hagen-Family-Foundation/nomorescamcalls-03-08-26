import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.emergentagent.com',
      '.emergentcf.cloud',
      '.preview.emergentagent.com',
      'nomorescamcalls.com',
      '.nomorescamcalls.com'
    ],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  define: {
    // Polyfill for process.env.NODE_ENV used in some libraries
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
});
