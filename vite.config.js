import path from 'path';

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@icons': path.resolve('src/assets/icons'),
      '@images': path.resolve('src/assets/images'),
      '@components': path.resolve('src/components'),
      '@layouts': path.resolve('src/layouts'),
      '@pages': path.resolve('src/pages'),
      '@utils': path.resolve('src/utils'),
    },
  },
});
