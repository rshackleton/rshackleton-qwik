import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export type ArticlesPageProps = {};

const ArticlesPage = component$<ArticlesPageProps>(() => {
  return (
    <div class="mx-auto max-w-3xl px-4">
      <div class="mx-auto max-w-3xl px-4 text-center">
        <h1 class="pb-4 font-bold text-2xl">Articles</h1>
      </div>

      <ul class="list-inside list-disc">
        <li>
          <Link
            class="inline-block font-medium underline-offset-4 hover:underline"
            href="/articles/test-article"
          >
            Test Article
          </Link>
        </li>
      </ul>
    </div>
  );
});

export default ArticlesPage;

export const head: DocumentHead = {
  title: 'Articles',
};
