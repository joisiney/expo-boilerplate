import { colors } from './colors';
import { fontFamily } from './font-family';
import { fontSize } from './font-size';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
    },
  },
  plugins: [],
}; 