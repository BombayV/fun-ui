/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  plugins: [require('flowbite/plugin')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': {
          'DEFAULT': 'var(--primary)',
          'light': 'var(--primary-light)',
        },
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
      }
    }
  }
};

module.exports = config;
