import { component$ } from '@builder.io/qwik';

type ImageProps = {
  src: string;
};

export const Image = component$<ImageProps>(({ src }) => {
  return <img alt="" loading="lazy" src={src} />;
});
