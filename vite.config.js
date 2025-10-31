import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'PrimeReactKitTailwind',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        if (format === 'es') return 'index.esm.js';
        if (format === 'cjs') return 'index.cjs.js';
        if (format === 'umd') return 'index.js';
        return `index.${format}.js`;
      }
    },
    rollupOptions: {
      external: ['primereact', 'clsx', 'tailwind-merge', 'react'],
      output: {
        globals: {
          'primereact': 'PrimeReact',
          'clsx': 'clsx',
          'tailwind-merge': 'tailwindMerge',
          'react': 'React'
        }
      }
    },
    minify: 'terser'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});