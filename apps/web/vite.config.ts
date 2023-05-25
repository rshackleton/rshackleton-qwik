import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import path from 'node:path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdxCollectionPlugin from './plugins/MdxCollectionPlugin';

export default defineConfig(() => {
  return {
    plugins: [
      mdxCollectionPlugin(),
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
