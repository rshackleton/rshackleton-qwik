import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from '~/components/hero/hero';

const IndexPage = component$(() => {
  return <Hero />;
});

export default IndexPage;

export const head: DocumentHead = {
  title: 'Hello World',
  meta: [
    {
      name: 'description',
      content: 'Hello world description',
    },
  ],
};
