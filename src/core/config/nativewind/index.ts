// Configuração principal do NativeWind
import { colors } from './colors';
import { fontFamily } from './font-family';
import { fontSize } from './font-size';
import tailwindConfig from './tailwind.config.js';

// Exportar configuração do Tailwind
export { tailwindConfig };
export default tailwindConfig;

// Re-exportar configurações para uso direto
export const nativewindConfig = {
  colors,
  fontFamily,
  fontSize,
} as const;

// Tipos para TypeScript
export interface NativeWindConfig {
  colors: typeof colors;
  fontFamily: typeof fontFamily;
  fontSize: typeof fontSize;
}

// Exportar configurações individuais
export { colors, fontFamily, fontSize };
