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
        title="Full Stack Developer"
        content="Hey, I am a full stack developer from Leeds, United Kingdom. 👋"
      />
      <ArticleList
        cta={{
          text: 'Check out the other articles',
          url: '/articles',
        }}
        items={articles.slice(0, 5).map(
          (item): ArticleCardProps => ({
            id: item.slug as string,
            cta: {
              text: '',
              url: (item.data.external
                ? item.data.external
                : `/articles/${item.slug}`) as string,
              target: item.data.external ? '_blank' : undefined,
            },
            date: item.data.date,
            summary: item.data.summary,
            tags: orderBy(item.data.tags ?? []),
            title: item.data.title,
          })
        )}
        title="Articles"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: `Full Stack Developer | Richard Shackleton`,
  meta: [
    {
      name: 'description',
      content: `Richard Shackleton is a full stack developer from Leeds, United Kingdom.`,
    },
  ],
};
