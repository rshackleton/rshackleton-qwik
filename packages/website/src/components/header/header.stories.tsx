import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { HeaderProps } from './header';
import { Header } from './header';

export default {
  title: 'Header',
  component: Header,
} as Meta<HeaderProps>;

export const Default: StoryObj<HeaderProps> = {};
