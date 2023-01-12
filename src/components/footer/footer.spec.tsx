import { createDOM } from '@builder.io/qwik/testing';
import { expect, test } from 'vitest';
import { Footer } from './footer';

test(`[Footer Component]: Renders without error`, async () => {
  const { screen, render } = await createDOM();
  await render(<Footer />);
  expect(screen.outerHTML).toMatchSnapshot();
});
