import path from 'node:path';
import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron/simple';

export default defineConfig({
  plugins: [
    electron({
      main: {
        entry: path.resolve(__dirname, 'src/main.ts'),
        vite: {
          build: {
            outDir: path.resolve(__dirname, 'dist'),
          },
        },
      },
      preload: {
        input: {
          preload: path.resolve(__dirname, 'src/preload/preload.main.ts'),
        },
        vite: {
          build: {
            outDir: path.resolve(__dirname, 'dist/preload'),
          },
        },
      }
    })
  ],
});
