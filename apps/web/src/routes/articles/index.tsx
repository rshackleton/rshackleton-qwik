import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import orderBy from 'lodash/orderBy';
import { ArticleList, Hero } from 'ui';
import type { ArticleCardProps } from 'ui/src/molecules/ArticleCard';
import { items } from 'virtual:mdx-collection';

const ordered = orderBy(items, ['date'], ['desc']);

export default component$(() => {
  return (
    <div>
      <Hero
        title="Articles"
        content="My thoughts, guides and random code katas. 🧵👇"
      />
      <ArticleList
        items={ordered.map(
          (item): ArticleCardProps => ({
            id: item.slug as string,
            cta: {
              text: '',
              url: (item.external
                ? item.external
                : `/articles/${item.slug}`) as string,
              target: item.external ? '_blank' : '_self',
            },
            date: item.date as string,
            summary: item.summary as string,
            tags: orderBy(item.tags as string[]),
            title: item.title as string,
          })
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Articles | Richard Shackleton',
};
