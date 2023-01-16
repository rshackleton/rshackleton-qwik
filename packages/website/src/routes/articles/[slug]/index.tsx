import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { loader$ } from '@builder.io/qwik-city';
import groq from 'groq';
import { formatDate, formatDateISO } from '~/helpers/date';
import client from '~/sanity/client';

export type ArticlePageData = {
  content: any;
  date: string;
  title: string;
};

export const getArticle = loader$(async (event): Promise<ArticlePageData | null> => {
  const query = groq`
    *[_type == "article" && slug.current == $slug][0] {
      content,
      date,
      title,
    }
  `;

  const result = await client.fetch(query, { slug: event.params.slug });

  if (!result) {
    // @todo: Figure out how to throw 404 properly.
    return null;
  }

  return {
    content: result.content,
    date: result.date,
    title: result.title,
  };
});

const ArticlePage = component$(() => {
  const articleSignal = getArticle.use();

  return (
    <>
      {articleSignal.value && (
        <>
          <div class="mx-auto max-w-3xl px-4 text-center">
            <h1 class="pb-4 text-2xl font-bold">{articleSignal.value.title}</h1>
            <div class="pb-8 text-lg font-medium">
              <time dateTime={formatDateISO(articleSignal.value.date)}>
                {formatDate(articleSignal.value.date)}
              </time>
            </div>
          </div>

          <div class="mx-auto max-w-3xl px-4">
            <div class="rich-text">TODO: Transform Sanity blocks to Qwik components.</div>
            <pre class="max-h-[640px] w-full overflow-auto">
              {JSON.stringify(articleSignal.value.content, null, 2)}
            </pre>
          </div>
        </>
      )}
    </>
  );
});

export default ArticlePage;

export const head: DocumentHead = {
  title: 'Article Page',
};
