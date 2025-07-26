import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src/', // root directory (optional if index.html is in the root)
  // base path for assets (useful for relative paths)

  build: {
    outDir: '../dist', // folder where built files go
    emptyOutDir: true, // clean the outDir before building

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'), // entry file(s)
        ma: resolve(__dirname, 'src/home/index.html'),
      },
    },
  },

 
});
