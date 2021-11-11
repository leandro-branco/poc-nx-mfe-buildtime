const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
// const { join } = require('path');

module.exports = {
  presets: [require('../../tailwind.config.js')],
  purge: createGlobPatternsForDependencies(__dirname, '/**/!(*.stories|*.spec).{tsx,jsx,js,ts}'),
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};