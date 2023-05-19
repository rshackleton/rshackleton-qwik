const uiConfig = require('ui/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...uiConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};
