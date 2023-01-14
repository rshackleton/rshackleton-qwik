import { QwikCityMockProvider } from '@builder.io/qwik-city';
import { createDOM } from '@builder.io/qwik/testing';
import { test } from 'vitest';
import { Hero } from './hero';

test(`[Hero Component]: Renders without error`, async () => {
  const { render } = await createDOM();
  await render(
    <QwikCityMockProvider>
      <Hero />
    </QwikCityMockProvider>,
  );
});
