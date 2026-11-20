import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command, isPreview }) => {
  return {
    base:
      command === 'build' || isPreview ? '/goit-js-project-ArtistsHub/' : '/',
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    css: {
      postcss: {
        plugins: [
          SortCss({
            sort: 'mobile-first',
          }),
        ],
      },
    },
    build: {
      sourcemap: true,
      rolldownOptions: {
        input: glob.sync('*.html', { cwd: 'src', absolute: true }),
        output: {
          codeSplitting: {
            groups: [
              {
                name: 'vendor',
                test: /node_modules/,
              },
            ],
          },
          entryFileNames: chunkInfo => {
            if (chunkInfo.name === 'commonHelpers') {
              return 'commonHelpers.js';
            }
            return '[name].js';
          },
          assetFileNames: assetInfo => {
            const fileName = assetInfo.names?.[0] || assetInfo.name;
            if (fileName && fileName.endsWith('.html')) {
              return '[name].[ext]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});
