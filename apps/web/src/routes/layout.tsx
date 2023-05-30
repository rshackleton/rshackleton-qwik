import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from "@builder.io/qwik-city";
import { Footer, Header } from 'ui';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
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
