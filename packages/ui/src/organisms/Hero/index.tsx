import { component$ } from '@builder.io/qwik';
import { TagList } from '../../molecules/TagList';
import type { CtaModel } from '../../types';

type HeroProps = {
  anchorId?: string;
  content?: string;
  cta?: CtaModel;
  subtitle?: string;
  tags?: string[];
  title: string;
};

export const Hero = component$<HeroProps>(
  ({ anchorId, content, cta, subtitle, tags, title }) => {
    return (
      <section
        id={anchorId}
        class="relative my-[max(64px,4vw)] grid place-content-center place-items-center overflow-hidden"
      >
        <div class="relative mx-auto flex w-full flex-col items-center px-4 text-center">
          <h1 class="max-w-[24ch] text-5xl font-bold">{title}</h1>
          {subtitle && <p class="mt-3 text-lg font-medium">{subtitle}</p>}
          {tags && (
            <div class="mt-5">
              <TagList tags={tags} />
            </div>
          )}
          {content && <p class="mx-auto mt-5 max-w-prose text-lg">{content}</p>}
          {cta && cta.url && (
            <a
              class="bg-primary-700 hover:bg-primary-600 mt-8 inline-block scale-100 rounded py-3 px-5 text-base font-bold text-white subpixel-antialiased transition will-change-transform hover:scale-110"
              href={cta.url}
              target={cta.target}
            >
              {cta.text}
            </a>
          )}
        </div>
      </section>
    );
  }
);
