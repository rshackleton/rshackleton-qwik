import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from "@builder.io/qwik-city";
import { Footer, Header } from 'ui';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    public: true,
    maxAge: 5,
    sMaxAge: 10,
    staleWhileRevalidate: 60 * 60 * 24 * 365,
  });
};

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
});
