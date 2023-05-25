import { component$ } from '@builder.io/qwik';
import { formatDate } from 'ui/src/helpers/date';
import { ArticleCard } from 'ui/src/molecules/ArticleCard';
import { collections } from 'virtual:mdx-collection';

export type ArticleSummaryProps = {
  slug: string;
};

export const ArticleSummary = component$<ArticleSummaryProps>(({ slug }) => {
  const item = collections.articles.find(
    (item: any) => item.slug === slug
  ) as any;

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
      date={formatDate(item.date as string)}
      summary={item.summary as string}
      tags={item.tags as string[]}
      title={item.title as string}
    />
  );
});
