import path from 'path';

import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint({ exclude: ['/virtual:/**', 'node_modules/**'] })],
  test: {
    //# vitest에서 제공하는 모듈을 별도로 import할 필요 없음
    globals: true,
    //@ jsdom은 node.js 환경에서 사용할 수 있는 가상 DOM 라이브러리
    //@ 브라우저 환경과는 다르게 브라우저 API를 사용할 수 없음
    environment: 'jsdom',
    setupFiles: './src/utils/test/setupTests.js',
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
