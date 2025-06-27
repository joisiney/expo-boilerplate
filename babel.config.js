module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo'],
      'nativewind/babel'
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      'babel-plugin-macros',
      'react-native-reanimated/plugin',
    ],
  };
}; 