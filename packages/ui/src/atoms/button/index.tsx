import { Slot, component$ } from '@builder.io/qwik';

export const Button = component$(() => {
  return (
    <button>
      <Slot />
    </button>
  );
});
