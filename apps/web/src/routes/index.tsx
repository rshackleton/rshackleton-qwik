import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ArticleList, Hero } from 'ui';

export default component$(() => {
  return (
    <div>
      <Hero
        title="Full Stack Developer"
        content="Hey, I am a full stack developer from Leeds, United Kingdom. 👋"
      />
      <ArticleList
        cta={{
          text: 'Check out the other articles',
          url: '#',
        }}
        items={[]}
        title="Articles"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
