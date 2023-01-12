import { QwikCityMockProvider } from '@builder.io/qwik-city';
import { createDOM } from '@builder.io/qwik/testing';
import { expect, test } from 'vitest';
import { RouterHead } from './router-head';

test(`[Router Head Component]: Renders without error`, async () => {
  const { screen, render } = await createDOM();
  await render(
    <QwikCityMockProvider>
      <RouterHead />
    </QwikCityMockProvider>,
  );
  expect(screen.outerHTML).toMatchSnapshot();
});
