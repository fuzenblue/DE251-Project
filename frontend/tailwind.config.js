import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "primary": "#FF9B00",
        "dark-brown": "#693817",
        "dark-gray": "#303D24",
        "dark-green": "#303D24",
        "green-yellow": "#96AA3B",
        "light-gray": "#F9F8F4",
      },
    },
  },
  
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          // add custom color here
           
          "primary": "#FF9B00",
          "accent": "#F5BB05",
          "dark-brown": "#693817",
          "dark-gray": "#303D24",
          "dark-green": "#303D24",
          "green-yellow": "#96AA3B",
          "light-gray": "#F9F8F4",
        },
      },
    ],
  },
}
