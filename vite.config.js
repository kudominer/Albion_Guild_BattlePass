import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Đường dẫn tương đối giúp tương thích 100% với GitHub Pages & mọi custom domain
  server: {
    port: 5173,
    host: true
  }
});
