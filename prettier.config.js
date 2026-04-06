import prettierConfig from '@javalce/prettier-config';

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  ...prettierConfig,
  plugins: [...prettierConfig.plugins, 'prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/global.css',
  tailwindFunctions: ['tv', 'cn'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
