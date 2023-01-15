import { QwikCityMockProvider } from '@builder.io/qwik-city';
import { createDOM } from '@builder.io/qwik/testing';
import { test } from 'vitest';
import { RouterHead } from './router-head';

test(`[Router Head Component]: Renders without error`, async () => {
  const { render } = await createDOM();
  await render(
    <QwikCityMockProvider>
      <RouterHead />
    </QwikCityMockProvider>,
  );
});
