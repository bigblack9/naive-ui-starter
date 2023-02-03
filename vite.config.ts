/*
 * @Author: black9 lcl904624834@live.com
 * @Date: 2023-02-02 16:42:42
 * @LastEditors: black9 lcl904624834@live.com
 * @LastEditTime: 2023-02-03 16:02:22
 * @FilePath: /naive-ui-template/vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
  server: {
    port: 3100,
    hmr: true,
    open: true,
    proxy: {
      '/api': {
        target: 'https://127.0.0.1',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
});
