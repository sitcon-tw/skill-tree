/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'stone': {
        '50': '#f0f7fe',
        '100': '#ddedfc',
        '200': '#c2e1fb',
        '300': '#98cff8',
        '400': '#67b5f3',
        '500': '#4396ee',
        '600': '#2e79e2',
        '700': '#2564d0',
        '800': '#2451a9',
        '900': '#234685',
        '950': '#121f39',
      },
    }
  },
  plugins: [],
}
