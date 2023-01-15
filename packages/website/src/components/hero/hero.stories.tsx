import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { HeroProps } from './hero';
import { Hero } from './hero';

export default {
  title: 'Hero',
  component: Hero,
} as Meta<HeroProps>;

export const Default: StoryObj<HeroProps> = {};
