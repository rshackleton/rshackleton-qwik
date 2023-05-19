import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from 'ui';

export default component$(() => {
  return (
    <div>
      <Hero
        title="Page Not Found"
        content="Looks like I misplaced something... 😱"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Page Not Found | Richard Shackleton',
};
