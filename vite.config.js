import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      // 'assets': path.resolve(__dirname, './src/assets'),
      // 'utils': path.resolve(__dirname, './src/utils'),
      // 'hooks': path.resolve(__dirname, './src/hooks'),
      // 'context': path.resolve(__dirname, './src/context'),
    }
  }
});
