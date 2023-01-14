import { QwikCityMockProvider } from '@builder.io/qwik-city';
import { createDOM } from '@builder.io/qwik/testing';
import { test } from 'vitest';
import Layout from './layout';

test(`[Layout Component]: Renders without error`, async () => {
  const { render } = await createDOM();
  await render(
    <QwikCityMockProvider>
      <Layout>Mock Content</Layout>
    </QwikCityMockProvider>,
  );
});
