const {getDefaultConfig} = require('expo/metro-config');
const {withNativeWind} = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Otimizações para performance
config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg']
};

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer')
};

// Configuração do NativeWind com opções mais específicas
module.exports = withNativeWind(config, {
  input: './src/core/config/nativewind/global.css',
  configPath: './tailwind.config.js',
  // Forçar processamento em desenvolvimento
  inlineRem: 16,
  // Garantir que processa todos os arquivos
  plugins: [
    'nativewind/babel',
  ]
}); 