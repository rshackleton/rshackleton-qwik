import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Header = component$(() => {
  return (
    <header>
      <div class="mx-auto max-w-screen-2xl px-8 py-8">
        <Link class="text-lg underline underline-offset-2" href="/">
          rshackleton.co.uk
        </Link>
      </div>
    </header>
  );
});
