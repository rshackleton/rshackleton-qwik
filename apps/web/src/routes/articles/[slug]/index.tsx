import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from 'ui';

export default component$(() => {
  return (
    <div>
      <Hero title="Article title" />
      <section class="rich-text mx-auto max-w-[80ch] px-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex
          debitis laudantium beatae? Nisi nesciunt veniam quae at, explicabo
          nobis necessitatibus accusantium quis deserunt numquam consequuntur
          fuga quas impedit dicta?
        </p>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Articles',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
