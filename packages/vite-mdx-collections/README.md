# vite-mdx-collections

Expose markdown frontmatter to your app via a module import.

## Configuration

Setup the plugin with a series of collection definitions:

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import mdxCollections from 'vite-mdx-collections';

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
    ],
  };
});
```

## Usage

Access the collection frontmatter via the virtual module `virtual:mdx-collection`.

```ts
// src/routes/index.tsx
import { collections } from 'virtual:mdx-collection';

const { articles } = collections;
```
