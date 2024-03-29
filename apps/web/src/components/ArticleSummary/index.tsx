import { component$ } from '@builder.io/qwik';
import { formatDate } from 'ui/src/helpers/date';
import { ArticleCard } from 'ui/src/molecules/ArticleCard';
import { articles } from '~/collections/articles';

export type ArticleSummaryProps = {
  slug: string;
};

export const ArticleSummary = component$<ArticleSummaryProps>(({ slug }) => {
  const item = articles.find((item) => item.slug === slug);

  if (!item) {
    return null;
  }

  return (
    <ArticleCard
      id={slug}
      cta={{
        text: '',
        url: `/articles/${slug}`,
      }}
      date={formatDate(item.data.date)}
      summary={item.data.summary}
      tags={item.data.tags ?? []}
      title={item.data.title}
    />
  );
});
