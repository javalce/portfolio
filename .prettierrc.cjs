const prettier = require('@javalce/prettier-config');

/** @type {import('prettier').Config} */
module.exports = {
  ...prettier,
  plugins: [...prettier.plugins, 'prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
