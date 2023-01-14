import { component$, Slot } from '@builder.io/qwik';
import { Footer } from '~/components/footer/footer';
import { Header } from '../components/header/header';

export default component$(() => {
  return (
    <div id="root" class="site-container">
      <Header />
      <main id="main">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
