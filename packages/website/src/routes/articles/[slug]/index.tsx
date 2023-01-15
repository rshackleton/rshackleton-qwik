import { component$, Resource } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from '@builder.io/qwik-city';
import { formatDate, formatDateISO } from '~/helpers/date';

export type ArticlePageData = {
  content: string;
  date: string;
  title: string;
};

export type ArticlePageProps = {};

export const onGet: RequestHandler<ArticlePageData> = () => {
  return {
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `,
    date: `2019-11-29`,
    title: `Gatsby Cloud & Kontent.ai - A match made in heaven?`,
  };
};

const ArticlePage = component$<ArticlePageProps>(() => {
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
                  <h1 class="pb-4 font-bold text-2xl">{model.title}</h1>
                  <div class="pb-8 font-medium text-lg">
                    <time dateTime={formatDateISO(model.date)}>{formatDate(model.date)}</time>
                  </div>
                </div>

                <div class="mx-auto max-w-3xl px-4">
                  <div class="rich-text" dangerouslySetInnerHTML={model.content}></div>
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
