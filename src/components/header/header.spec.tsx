import { QwikCityMockProvider } from '@builder.io/qwik-city';
import { createDOM } from '@builder.io/qwik/testing';
import { expect, test } from 'vitest';
import { Header } from './header';

test(`[Header Component]: Renders without error`, async () => {
  const { screen, render } = await createDOM();
  await render(
    <QwikCityMockProvider>
      <Header />
    </QwikCityMockProvider>,
  );
  expect(screen.outerHTML).toMatchSnapshot();
});
