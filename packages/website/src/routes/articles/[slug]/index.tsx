import { component$, Resource } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from '@builder.io/qwik-city';
import groq from 'groq';
import { formatDate, formatDateISO } from '~/helpers/date';
import client from '~/sanity/client';

export type ArticlePageData = {
  content: any;
  date: string;
  title: string;
};

export const onGet: RequestHandler<ArticlePageData> = async (event) => {
  const query = groq`
    *[_type == "article" && slug.current == $slug][0] {
      content,
      date,
      title,
    }
  `;

  const result = await client.fetch(query, { slug: event.params.slug });

  if (!result) {
    event.response.status = 404;
    return;
  }

  return {
    content: result.content,
    date: result.date,
    title: result.title,
  };
};

const ArticlePage = component$(() => {
  const articleData = useEndpoint<ArticlePageData>();

  return (
    <Resource
      value={articleData}
      onResolved={(model) => {
        return (
          <>
            {model && (
              <>
                <div class="mx-auto max-w-3xl px-4 text-center">
                  <h1 class="pb-4 text-2xl font-bold">{model.title}</h1>
                  <div class="pb-8 text-lg font-medium">
                    <time dateTime={formatDateISO(model.date)}>{formatDate(model.date)}</time>
                  </div>
                </div>

                <div class="mx-auto max-w-3xl px-4">
                  <div class="rich-text">TODO: Transform Sanity blocks to Qwik components.</div>
                  <pre class="max-h-[640px] w-full overflow-auto">
                    {JSON.stringify(model.content, null, 2)}
                  </pre>
                </div>
              </>
            )}
          </>
        );
      }}
    />
  );
});

export default ArticlePage;

export const head: DocumentHead = {
  title: 'Article Page',
};
