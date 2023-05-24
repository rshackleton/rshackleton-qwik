import { glob } from 'glob';
import matter from 'gray-matter';
import path from 'node:path';
import type { Plugin } from 'vite';

export default function mdxCollectionPlugin(): Plugin {
  const virtualModuleId = 'virtual:mdx-collection';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'mdxCollectionPlugin',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }

      return null;
    },
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        const basePath = path.join(__dirname, '../src/routes');

        const results = await glob('**/*.mdx', {
          cwd: basePath,
        });

        const items = results.map((result) => {
          const mdxPath = path.join(basePath, result);
          const slug = /.+\/(.+)\/index\.mdx$/.exec(result)?.[1] ?? '';
          const file = matter.read(mdxPath);
          return { ...file.data, slug };
        });

        return `export const items = ${JSON.stringify(items)}`;
      }

      return null;
    },
  };
}
