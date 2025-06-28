const {colors} = require('./src/core/config/nativewind/colors.js');
const {fontFamily} = require('./src/core/config/nativewind/font-family.js');
const {fontSize} = require('./src/core/config/nativewind/font-size.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors,
            fontFamily,
            fontSize
        }
    },
    plugins: [],
    // Configuração específica para twrnc
    corePlugins: {
        // Desabilitar plugins que causam problemas no twrnc
        preflight: false
    }
};
