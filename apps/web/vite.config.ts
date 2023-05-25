import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import path from 'node:path';
import { defineConfig } from 'vite';
import mdxCollections from 'vite-mdx-collections';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [
      mdxCollections({
        collections: [
          {
            name: 'articles',
            glob: './src/routes/articles/**/*.mdx',
          },
        ],
      }),
      qwikCity({
        trailingSlash: false,
      }),
      qwikVite({
        vendorRoots: [path.join(__dirname, '../../packages/ui/src')],
      }),
      tsconfigPaths(),
    ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
