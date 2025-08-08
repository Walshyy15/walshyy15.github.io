import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@fluxforge/engine': resolve(__dirname, '../../packages/engine/src'),
      '@fluxforge/render': resolve(__dirname, '../../packages/render/src'),
      '@fluxforge/worker': resolve(__dirname, '../../packages/worker/src'),
      '@fluxforge/ui': resolve(__dirname, '../../packages/ui/src'),
    },
  },
});


