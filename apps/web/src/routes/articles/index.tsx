import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import orderBy from 'lodash/orderBy';
import { ArticleList, Hero } from 'ui';
import type { ArticleCardProps } from 'ui/src/molecules/ArticleCard';
import { articles } from '~/collections/articles';

export default component$(() => {
  return (
    <div>
      <Hero
        title="Articles"
        content="My thoughts, guides and random code katas. 🧵👇"
      />
      <ArticleList
        items={articles.map(
          (item): ArticleCardProps => ({
            id: item.slug as string,
            cta: {
              text: '',
              url: (item.data.external
                ? item.data.external
                : `/articles/${item.slug}`) as string,
              target: item.data.external ? '_blank' : '_self',
            },
            date: item.data.date,
            summary: item.data.summary,
            tags: orderBy(item.data.tags ?? []),
            title: item.data.title,
          })
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Articles | Richard Shackleton',
};
