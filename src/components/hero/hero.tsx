import { component$ } from '@builder.io/qwik';

export type HeroProps = {};

export const Hero = component$(() => {
  return (
    <section class="bg-slate-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100">
      <div class="site-container py-4">
        <h1>Hello World</h1>
      </div>
    </section>
  );
});
