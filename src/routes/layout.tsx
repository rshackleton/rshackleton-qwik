import { component$, Slot } from '@builder.io/qwik';
import { Footer } from '~/components/footer/footer';
import { Header } from '../components/header/header';

export default component$(() => {
  return (
    <div class="bg-slate-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100 min-h-full grid grid-rows-[auto,1fr,auto]">
      <Header />
      <main class="">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
