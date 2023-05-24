import { component$, Slot } from '@builder.io/qwik';
import { Footer, Header } from 'ui';

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
});
