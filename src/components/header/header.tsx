import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Header = component$(() => {
  return (
    <header class="">
      <div class="site-container py-12">
        <Link class="text-lg underline underline-offset-2" href="/">
          rshackleton.co.uk
        </Link>
      </div>
    </header>
  );
});
