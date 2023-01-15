import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Navigation } from '../navigation/navigation';

export type HeaderProps = {};

export const Header = component$<HeaderProps>(() => {
  return (
    <header class="flex flex-col items-center px-4 py-12 text-base text-neutral-800">
      <Link class="inline-block pb-4 text-xl font-bold underline-offset-4 hover:underline" href="/">
        Richard Shackleton
      </Link>
      <Navigation />
    </header>
  );
});
