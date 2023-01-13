import { qwikCityDecorator } from 'storybook-framework-qwik/qwik-city-decorator';
import '../src/global.css';

export const decorators = [qwikCityDecorator];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
