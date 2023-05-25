import { Slot, component$ } from '@builder.io/qwik';
import { useDocumentHead } from '@builder.io/qwik-city';
import orderBy from 'lodash/orderBy';
import { Hero } from 'ui';
import { formatDate } from 'ui/src/helpers/date';

export default component$(() => {
  const { title, frontmatter } = useDocumentHead();

  const tags = [formatDate(frontmatter.date), ...orderBy(frontmatter.tags)];

  return (
    <div>
      <Hero tags={tags} title={title} />
      <section class="rich-text mx-auto max-w-[80ch] px-4">
        <Slot />
      </section>
    </div>
  );
});
