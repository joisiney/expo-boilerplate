const {colors} = require('./src/core/config/nativewind/colors.js');
const {fontFamily} = require('./src/core/config/nativewind/font-family.js');
const {fontSize} = require('./src/core/config/nativewind/font-size.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Arquivos da pasta src
        './src/**/*.{js,jsx,ts,tsx}',
        './src/**/**/*.{js,jsx,ts,tsx}',
        // Arquivos da pasta app (Expo Router)
        './app/**/*.{js,jsx,ts,tsx}',
        './app/*.{js,jsx,ts,tsx}',
        // Arquivos na raiz se houver
        './*.{js,jsx,ts,tsx}'
    ],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors,
            fontFamily,
            fontSize
        }
    },
    plugins: [],
    // Configuração específica para desenvolvimento
    mode: 'jit',
    // Garantir que processa arquivos corretamente
    safelist: ['bg-red-500', 'text-primary-500', 'font-sans-bold']
};
