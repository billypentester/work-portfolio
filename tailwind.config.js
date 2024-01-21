/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: [ require('daisyui')],
  daisyui: {
    themes: [
      {
        "light": {
          "primary": '#262626',
          "secondary": "#059669",
          "accent": "#a7f3d0",
          "neutral": "#f5f5f5",
          "base-100": "#ffffff",
        },
        "dark": {
          "primary": '#f5f5f5',
          "secondary": "#22c55e",
          "accent": "#22c55e",
          "neutral": "#14532d",
          "base-100": "#022c22",
        },
        "office": {
          "primary": '#262626',
          "secondary": "#0284c7",
          "accent": "#bae6fd",
          "neutral": "#f5f5f5",
          "base-100": "#ffffff",
        },
      },
    ]
  },
}

