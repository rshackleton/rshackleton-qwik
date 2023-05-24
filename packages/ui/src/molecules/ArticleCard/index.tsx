import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { formatDate } from '../../helpers/date';
import type { CtaModel } from '../../types';
import { TagList } from '../TagList';

export type ArticleCardProps = {
  id: string;
  cta: CtaModel;
  date: string | Date;
  summary: string;
  tags: string[];
  title: string;
};

export const ArticleCard = component$<ArticleCardProps>(
  ({ cta, date, summary, tags, title }) => {
    const LinkComponent = cta.url.startsWith('/') ? Link : 'a';

    return (
      <LinkComponent
        class="group/link block outline-none"
        href={cta.url}
        target={cta.target}
        aria-label={cta.text}
      >
        <article class="group-focus-visible/link:ring-primary-200 group-hover/link:ring-primary-200 block rounded-lg bg-neutral-800 p-4 outline-none group-hover/link:ring group-focus-visible/link:ring">
          <h2 class="text-primary-200 mb-3 text-lg font-medium group-hover/link:underline group-focus-visible/link:underline">
            {title}
          </h2>
          <p class="my-0 text-sm text-neutral-400">{summary}</p>
          {tags && (
            <div class="mt-5">
              <TagList tags={[formatDate(date), ...tags]} />
            </div>
          )}
        </article>
      </LinkComponent>
    );
  }
);
