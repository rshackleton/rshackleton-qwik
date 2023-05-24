import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="flex place-content-center place-items-center items-center px-4 py-8">
      <p class="text-sm text-neutral-300">
        <span>&copy; Richard Shackleton {new Date().getUTCFullYear()}</span>
        <span>&nbsp;|&nbsp;</span>
        <span>
          Built with{' '}
          <a
            class="text-primary-300 hover:text-primary-100 underline"
            href="https://qwik.builder.io/"
            target="_blank"
            rel="noopener"
          >
            Qwik
          </a>
        </span>
      </p>
    </footer>
  );
});
