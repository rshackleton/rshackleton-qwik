import { component$, Slot } from '@builder.io/qwik';
import { Footer } from '~/components/footer/footer';
import { Header } from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section class="mx-auto max-w-screen-2xl px-8">
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
