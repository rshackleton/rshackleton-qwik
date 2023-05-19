import { component$, Slot } from '@builder.io/qwik';
import { Header } from 'ui';

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
    </>
  );
});
