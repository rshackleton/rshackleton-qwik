import { component$ } from '@builder.io/qwik';
import github from '../../assets/github.svg?raw';
import linkedin from '../../assets/linkedin.svg?raw';
import twitter from '../../assets/twitter.svg?raw';

export const Header = component$(() => {
  return (
    <header class="bg-primary-900">
      <div class="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-x-4 gap-y-4 px-4 py-8 sm:flex-row sm:py-12">
        <a
          class="inline-block text-2xl font-bold underline-offset-4 hover:underline"
          href="/"
        >
          Richard Shackleton
        </a>

        <ul class="flex items-center gap-x-4">
          <li>
            <a
              class="hover:text-primary-300 flex w-6 text-neutral-100 transition-colors sm:w-8"
              href="https://github.com/rshackleton"
              rel="nofollow"
              target="_blank"
              aria-label="Find me on GitHub"
              dangerouslySetInnerHTML={github}
            />
          </li>
          <li>
            <a
              class="hover:text-primary-300 flex w-6 text-neutral-100 transition-colors sm:w-8"
              href="https://twitter.com/shackleberry112"
              rel="nofollow"
              target="_blank"
              aria-label="Find me on Twitter"
              dangerouslySetInnerHTML={twitter}
            />
          </li>
          <li>
            <a
              class="hover:text-primary-300 flex w-6 text-neutral-100 transition-colors sm:w-8"
              href="https://www.linkedin.com/in/rpshackleton/"
              rel="nofollow"
              target="_blank"
              aria-label="Find me on LinkedIn"
              dangerouslySetInnerHTML={linkedin}
            />
          </li>
        </ul>
      </div>
    </header>
  );
});
