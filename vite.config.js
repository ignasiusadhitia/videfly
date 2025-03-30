import path from 'path';

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@data': path.resolve('src/assets/data'),
      '@hooks': path.resolve('src/hooks'),
      '@icons': path.resolve('src/assets/icons'),
      '@images': path.resolve('src/assets/images'),
      '@sections': path.resolve('src/components/sections'),
      '@ui': path.resolve('src/components/ui'),
      '@utils': path.resolve('src/utils'),
    },
  },
});
