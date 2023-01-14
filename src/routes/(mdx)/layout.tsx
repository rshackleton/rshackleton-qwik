import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="rich-text mx-auto max-w-3xl px-4">
      <Slot />
    </section>
  );
});
