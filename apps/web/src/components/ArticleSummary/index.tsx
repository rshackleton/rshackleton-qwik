import { component$ } from '@builder.io/qwik';
import { ArticleCard } from 'ui/src/molecules/ArticleCard';

export type ArticleSummaryProps = {
  slug: string;
};

export const ArticleSummary = component$<ArticleSummaryProps>(({ slug }) => {
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
