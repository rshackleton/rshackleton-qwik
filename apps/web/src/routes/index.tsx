import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { orderBy } from 'lodash';
import { ArticleList, Hero } from 'ui';
import type { ArticleCardProps } from 'ui/src/molecules/ArticleCard';
import { items } from 'virtual:mdx-collection';

const ordered = orderBy(items, ['date'], ['desc']);

export default component$(() => {
  return (
    <div>
      <Hero
        title="Full Stack Developer"
        content="Hey, I am a full stack developer from Leeds, United Kingdom. 👋"
      />
      <ArticleList
        cta={{
          text: 'Check out the other articles',
          url: '/articles',
        }}
        items={ordered.slice(0, 5).map(
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
        title="Articles"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
