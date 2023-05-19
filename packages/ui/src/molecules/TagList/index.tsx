import { component$ } from '@builder.io/qwik';
import { Tag } from '../../atoms/Tag';

type TagListProps = {
  tags: string[];
};

export const TagList = component$<TagListProps>(({ tags }) => {
  return (
    <ul class="text-primary-200 flex flex-wrap gap-2 font-mono text-xs font-bold uppercase">
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
});
