import { globSync } from 'glob';
import matter from 'gray-matter';
import path from 'node:path';
import type { Plugin } from 'vite';

export type Options = {
  collections: {
    name: string;
    glob: string;
  }[];
};

/**
 * MDX Collections Plugin
 */
export default function mdxCollectionPlugin(options: Options): Plugin {
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
        const rootPath = process.cwd();

        const collections: Record<string, unknown[]> = {};

        options.collections.forEach((collection) => {
          const results = globSync(collection.glob, {
            cwd: rootPath,
          });

          const items = results.map((result) => {
            const mdxPath = path.join(rootPath, result);
            const slug = /.+\/(.+)\/index\.mdx$/.exec(result)?.[1] ?? '';
            const file = matter.read(mdxPath);
            return { ...file.data, slug };
          });

          collections[collection.name] = items;
        });

        return `export const collections = ${JSON.stringify(collections)}`;
      }

      return null;
    },
  };
}
