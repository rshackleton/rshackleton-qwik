import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ArticleList, Hero } from 'ui';

export default component$(() => {
  return (
    <div>
      <Hero
        title="Articles"
        content="My thoughts, guides and random code katas. 🧵👇"
      />
      <ArticleList items={[]} />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Articles | Richard Shackleton',
};
