import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import {
  ArticleCard,
  ArticleCardProps,
} from '../../molecules/ArticleCard/ArticleCard';
import { CtaModel } from '../../types';

type ArticleListProps = {
  anchorId?: string;
  items: ArticleCardProps[];
  cta?: CtaModel;
  title?: string;
};

export const ArticleList = component$<ArticleListProps>(
  ({ anchorId, cta, items, title }) => {
    return (
      <section
        id={anchorId}
        class="mx-auto my-[max(64px,4vw)] max-w-[80ch] px-4"
      >
        {title && (
          <h2 class="mb-[1em] text-center text-3xl font-bold">{title}</h2>
        )}
        <ul class="flex flex-col gap-x-4 gap-y-6">
          {items.map((item) => (
            <li key={item.id} class="flex flex-col">
              <ArticleCard {...item} />
            </li>
          ))}
        </ul>
        {cta && (
          <div class="mt-8 flex place-content-center place-items-center">
            <Link
              class="bg-primary-700 hover:bg-primary-600 inline-block scale-100 rounded py-3 px-5 text-base font-bold text-white subpixel-antialiased transition will-change-transform hover:scale-110"
              href={cta.url}
              target={cta.target}
            >
              {cta.text}
            </Link>
          </div>
        )}
      </section>
    );
  }
);
