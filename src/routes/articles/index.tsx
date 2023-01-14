import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link, loader$ } from '@builder.io/qwik-city';
import { formatDate, formatDateISO } from '~/helpers/date';

export type ArticleItemData = {
  id: string;
  date: string;
  summary: string;
  title: string;
  url: string;
};

export type ArticlesPageData = {
  items: ArticleItemData[];
};

export const getArticlesData = loader$(async (): Promise<ArticlesPageData | null> => {
  // prettier-ignore
  const url = `https://deliver.kontent.ai/${import.meta.env.VITE_KONTENT_PROJECT_ID}/items?system.type=article&order=elements.date[desc]&language=default`;

  const res = await fetch(url);
  const resBody = await res.json();
  const items = resBody.items;

  return {
    items: items.map((item: any) => ({
      id: item.system.codename,
      date: item.elements.date.value,
      summary: item.elements.summary.value,
      title: item.elements.title.value,
      url: `/articles/${item.elements.slug.value}`,
    })),
  };
});

const ArticlesPage = component$(() => {
  const model = getArticlesData.use();

  if (!model.value) {
    return null;
  }

  return (
    <div class="mx-auto max-w-3xl px-4">
      <h1 class="mb-6 text-center font-bold text-2xl">Articles</h1>

      <ul class="flex flex-col gap-y-8">
        {model.value.items.map((item) => (
          <li key={item.id} class="">
            <Link class="group flex flex-col rounded-md bg-primary-100 p-4" href={item.url}>
              <h3 class="mb-2 font-semibold text-primary-800 underline-offset-2 text-lg group-hover:underline">
                {item.title}
              </h3>
              <time
                class="mb-1 font-medium text-primary-700 text-sm"
                dateTime={formatDateISO(item.date)}
              >
                {formatDate(item.date)}
              </time>
              <p class="m-0 text-base">{item.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ArticlesPage;

export const head: DocumentHead = {
  title: 'Articles',
};
