import { component$ } from '@builder.io/qwik';

export type FooterProps = {};

export const Footer = component$<FooterProps>(() => {
  return (
    <footer class="flex place-content-center place-items-center items-center px-4 py-8">
      <p class="text-sm text-neutral-500">
        &copy; Richard Shackleton {new Date().getUTCFullYear()}
      </p>
    </footer>
  );
});
