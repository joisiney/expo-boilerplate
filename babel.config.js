module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', {jsxImportSource: 'nativewind'}],
      'nativewind/babel'
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      'react-native-reanimated/plugin',
    ],
  };
}; 