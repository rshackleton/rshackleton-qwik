import { component$ } from '@builder.io/qwik';

export type FooterProps = {};

export const Footer = component$(() => {
  return (
    <footer class="bg-slate-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100">
      <div class="site-container py-4">
        <p class="text-sm">&copy; Richard Shackleton</p>
      </div>
    </footer>
  );
});
