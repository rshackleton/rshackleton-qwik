import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { loader$ } from '@builder.io/qwik-city';
import { formatDate, formatDateISO } from '~/helpers/date';

export type ArticlePageData = {
  content: string;
  date: string;
  title: string;
};

export const getArticleData = loader$(async (event): Promise<ArticlePageData | null> => {
  // prettier-ignore
  const url = `https://deliver.kontent.ai/${import.meta.env.VITE_KONTENT_PROJECT_ID}/items?system.type=article&elements.slug[eq]=${event.params.slug}&limit=1&language=default`;

  const res = await fetch(url);
  const resBody = await res.json();
  const item = resBody.items[0];

  return {
    content: item.elements.body.value, // TODO: handle html parsing/replacement somehow
    date: item.elements.date.value,
    title: item.elements.title.value,
  };
});

const ArticlePage = component$(() => {
  const model = getArticleData.use();

  if (!model.value) {
    return null;
  }

  return (
    <div class="mx-auto max-w-3xl px-4">
      <div class="mb-8 text-center">
        <h1 class="mb-4 font-bold text-2xl">{model.value.title}</h1>
        <div class="font-medium text-lg">
          <time dateTime={formatDateISO(model.value.date)}>{formatDate(model.value.date)}</time>
        </div>
      </div>

      <div class="rich-text" dangerouslySetInnerHTML={model.value.content}></div>
    </div>
  );
});

export default ArticlePage;

export const head: DocumentHead = ({ getData }) => {
  const data = getData(getArticleData);

  return {
    title: data?.title ?? 'Could not find article',
  };
};
