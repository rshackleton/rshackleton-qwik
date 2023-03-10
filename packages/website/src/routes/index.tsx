import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from '~/components/hero/hero';

const IndexRoute = component$(() => {
  return <Hero />;
});

export default IndexRoute;

export const head: DocumentHead = {
  title: 'Hello World',
  meta: [
    {
      name: 'description',
      content: 'Hello world description',
    },
  ],
};
