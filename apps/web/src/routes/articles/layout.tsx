import { Slot, component$ } from '@builder.io/qwik';
import { useDocumentHead } from '@builder.io/qwik-city';
import { Hero } from 'ui';
import { formatDate } from 'ui/src/helpers/date';

export default component$(() => {
  const { title, frontmatter } = useDocumentHead();

  const tags = [formatDate(frontmatter.date), ...(frontmatter.tags ?? [])];

  return (
    <div>
      <Hero title={title} tags={tags} />
      <section class="rich-text mx-auto max-w-[80ch] px-4">
        <Slot />
      </section>
    </div>
  );
});
