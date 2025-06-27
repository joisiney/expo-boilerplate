import { colors } from './colors.js';
import { fontFamily } from './font-family.js';
import { fontSize } from './font-size.js';

/** @type {import('tailwindcss').Config} */
export default {
  // NOTE: Update this to include the paths to all of your component files.
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