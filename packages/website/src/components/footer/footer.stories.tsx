import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { FooterProps } from './footer';
import { Footer } from './footer';

export default {
  title: 'Footer',
  component: Footer,
} as Meta<FooterProps>;

export const Default: StoryObj<FooterProps> = {};
