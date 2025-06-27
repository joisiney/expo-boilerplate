const fontSize = {
    // Tamanhos base
    xs: ['12px', {lineHeight: '16px'}],
    sm: ['14px', {lineHeight: '20px'}],
    base: ['16px', {lineHeight: '24px'}],
    lg: ['18px', {lineHeight: '28px'}],
    xl: ['20px', {lineHeight: '28px'}],

    // Tamanhos de headings
    '2xl': ['24px', {lineHeight: '32px'}],
    '3xl': ['30px', {lineHeight: '36px'}],
    '4xl': ['36px', {lineHeight: '40px'}],
    '5xl': ['48px', {lineHeight: '52px'}],
    '6xl': ['60px', {lineHeight: '64px'}],
    '7xl': ['72px', {lineHeight: '76px'}],
    '8xl': ['96px', {lineHeight: '100px'}],
    '9xl': ['128px', {lineHeight: '132px'}],

    // Tamanhos semânticos
    caption: ['12px', {lineHeight: '16px'}],
    body: ['16px', {lineHeight: '24px'}],
    subtitle: ['18px', {lineHeight: '28px'}],
    title: ['24px', {lineHeight: '32px'}],
    headline: ['30px', {lineHeight: '36px'}],
    display: ['36px', {lineHeight: '40px'}]
};

module.exports = {fontSize};
module.exports.default = fontSize;
