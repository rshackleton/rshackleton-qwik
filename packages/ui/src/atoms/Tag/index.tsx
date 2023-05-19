import { Slot, component$ } from '@builder.io/qwik';

export const Tag = component$(() => {
  return (
    <span class="bg-primary-600 inline-block rounded px-2 py-1 text-neutral-100">
      <Slot />
    </span>
  );
});
