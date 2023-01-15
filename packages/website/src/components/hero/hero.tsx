import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export type HeroProps = {};

export const Hero = component$<HeroProps>(() => {
  return (
    <section class="relative grid place-content-center place-items-center overflow-hidden py-[8vw]">
      <div class="relative mx-auto w-full max-w-screen-2xl px-4 text-center">
        <h1 class="pb-5 text-5xl font-bold">Full Stack Developer</h1>
        <p class="mx-auto max-w-prose pb-8 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Link
          class="bg-primary-500 hover:bg-primary-400 inline-block scale-100 rounded py-3 px-5 text-base font-bold text-white subpixel-antialiased transition will-change-transform hover:scale-110"
          href="/about"
        >
          Find out more
        </Link>
      </div>
    </section>
  );
});
