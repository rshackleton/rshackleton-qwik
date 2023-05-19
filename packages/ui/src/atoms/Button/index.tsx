import { Slot, component$ } from '@builder.io/qwik';
import type { JSX } from '@builder.io/qwik/jsx-runtime';

export type ButtonProps = JSX.IntrinsicElements['button'];

export const Button = component$((props: ButtonProps) => {
  return (
    <button {...props}>
      <Slot />
    </button>
  );
});
