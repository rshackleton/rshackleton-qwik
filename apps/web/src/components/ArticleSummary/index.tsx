import { component$ } from '@builder.io/qwik';
import { ArticleCard } from 'ui/src/molecules/ArticleCard';
import { items } from 'virtual:mdx-collection';

export type ArticleSummaryProps = {
  slug: string;
};

export const ArticleSummary = component$<ArticleSummaryProps>(({ slug }) => {
  const item = items.find((item) => item.slug === slug);

  console.log(item);

  return (
    <ArticleCard
      id={slug}
      cta={{ text: '', url: `/articles/${slug}`, target: '_self' }}
      date={'2022-01-01'}
      summary={''}
      tags={[]}
      title={slug}
    />
  );
});
