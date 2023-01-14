import { QwikCityMockProvider } from '@builder.io/qwik-city';
import { createDOM } from '@builder.io/qwik/testing';
import { test } from 'vitest';
import { Footer } from './footer';

test(`[Footer Component]: Renders without error`, async () => {
  const { render } = await createDOM();
  await render(
    <QwikCityMockProvider>
      <Footer />
    </QwikCityMockProvider>,
  );
});
