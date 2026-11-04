import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Permite que o projeto funcione em qualquer subpasta (ex: GitHub Pages /Portifolio/ ou Vercel /)
  base: './',
});
