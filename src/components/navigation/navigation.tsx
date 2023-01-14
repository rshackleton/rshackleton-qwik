import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export type NavigationItem = {
  id: string;
  title: string;
  url: string;
};

export type NavigationProps = {};

export const Navigation = component$<NavigationProps>(() => {
  const items: NavigationItem[] = [
    { id: '1', title: 'About', url: '/about ' },
    { id: '2', title: 'Articles', url: '/articles ' },
    { id: '3', title: 'Experience', url: '/experience ' },
  ];

  return (
    <nav>
      <ul class="flex gap-x-6">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              class="inline-block font-medium underline-offset-4 hover:underline"
              href={item.url}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});
