import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config: React plugin + dev proxy for Django backend
// base './' keeps asset paths relative so the static build works on
// GitHub Pages whether it is a user site, project site, or custom domain.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 4173,
  },
});
