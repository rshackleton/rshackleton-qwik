import { QwikCityMockProvider } from '@builder.io/qwik-city';
import { createDOM } from '@builder.io/qwik/testing';
import { expect, test } from 'vitest';
import IndexRoute from './index';

test(`[Header Component]: Renders without error`, async () => {
  const { screen, render } = await createDOM();
  await render(
    <QwikCityMockProvider>
      <IndexRoute />
    </QwikCityMockProvider>,
  );
  expect(screen.outerHTML).toMatchSnapshot();
});
