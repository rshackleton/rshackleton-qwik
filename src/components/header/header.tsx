import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export type HeaderProps = {};

export const Header = component$(() => {
  return (
    <header class="bg-slate-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100">
      <div class="site-container py-12">
        <Link class="text-lg underline underline-offset-2" href="/">
          rshackleton.co.uk
        </Link>
      </div>
    </header>
  );
});
