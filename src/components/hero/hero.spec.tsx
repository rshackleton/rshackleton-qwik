import { createDOM } from '@builder.io/qwik/testing';
import { expect, test } from 'vitest';
import { Hero } from './hero';

test(`[Hero Component]: Renders without error`, async () => {
  const { screen, render } = await createDOM();
  await render(<Hero />);
  expect(screen.outerHTML).toMatchSnapshot();
});
