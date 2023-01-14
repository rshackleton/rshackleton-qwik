import { vercelEdgeAdaptor } from '@builder.io/qwik-city/adaptors/vercel-edge/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';

// remove once this has been released: https://github.com/BuilderIO/qwik/issues/2597
(String as any).prototype.toUppercase = String.prototype.toUpperCase;

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ['src/entry.vercel-edge.tsx', '@qwik-city-plan'],
      },
      outDir: '.vercel/output/functions/_qwik-city.func',
    },
    plugins: [
      vercelEdgeAdaptor({
        staticGenerate: true,
      }),
    ],
  };
});
