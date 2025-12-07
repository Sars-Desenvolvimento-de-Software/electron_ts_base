import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  root: path.resolve(__dirname, 'src/pages'),
  build: {
    outDir: path.resolve(__dirname, 'dist/pages'),
    emptyOutDir: true,
  }
});
