import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { loader$ } from '@builder.io/qwik-city';
import { formatDate, formatDateISO } from '~/helpers/date';
import deliveryClient from '~/kontent/client';

export type ArticlePageData = {
  content: string;
  date: string;
  title: string;
};

export const getArticleData = loader$(async (event): Promise<ArticlePageData | null> => {
  try {
    const slug = event.params.slug;

    const response = await deliveryClient
      .items()
      .queryConfig({ usePreviewMode: false }) // TODO: Add preview support
      .type('article')
      .equalsFilter('elements.slug', slug)
      .limitParameter(1)
      .toPromise();

    const item = response.data.items[0];

    return {
      content: item.elements.body.value, // TODO: handle html parsing/replacement somehow
      date: item.elements.date.value,
      title: item.elements.title.value,
    };
  } catch (error) {
    return null;
  }
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
