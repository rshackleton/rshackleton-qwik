import { component$, Resource } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
import { Link, useEndpoint } from '@builder.io/qwik-city';
import groq from 'groq';
import client from '~/sanity/client';

export type ArticleModel = {
  id: string;
  date: string;
  summary: string;
  title: string;
  url: string;
};

export type ArticlesPageData = {
  items: ArticleModel[];
};

export const onGet: RequestHandler<ArticlesPageData> = async (event) => {
  const query = groq`
    *[_type == "article"] {
      _id,
      date,
      "slug": slug.current,
      summary,
      title,
    }
  `;

  const result = await client.fetch(query);

  if (!result?.length) {
    event.response.status = 404;
    return;
  }

  return {
    items: result.map((item: any) => ({
      id: item._id,
      date: item.date,
      summary: item.summary,
      title: item.title,
      url: `/articles/${item.slug}`,
    })),
  };
};

const ArticlesPage = component$(() => {
  const articleData = useEndpoint<ArticlesPageData>();

  return (
    <Resource
      value={articleData}
      onResolved={(model) => {
        return (
          <div class="mx-auto max-w-3xl px-4">
            <div class="mx-auto max-w-3xl px-4 text-center">
              <h1 class="pb-4 text-2xl font-bold">Articles</h1>
            </div>

            <ul class="list-inside list-disc">
              {model.items.map((item) => (
                <li key={item.id}>
                  <Link
                    class="inline-block font-medium underline-offset-4 hover:underline"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    />
  );
});

export default ArticlesPage;

export const head: DocumentHead = {
  title: 'Articles',
};
