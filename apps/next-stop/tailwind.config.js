const { join } = require('path');

module.exports = {
  presets: [require('../../tailwind-preset')],
  content: [join(__dirname, '/pages/**/*.{js,ts,jsx,tsx}')],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
};
