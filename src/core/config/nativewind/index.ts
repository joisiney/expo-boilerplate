import { colors } from './colors';
import { fontFamily } from './font-family';
import { fontSize } from './font-size';
import tailwindConfig from './tailwind.config.js';

export { tailwindConfig };
export default tailwindConfig;

export const nativewindConfig = {
  colors,
  fontFamily,
  fontSize,
} as const;

export interface NativeWindConfig {
  colors: typeof colors;
  fontFamily: typeof fontFamily;
  fontSize: typeof fontSize;
}

export { colors, fontFamily, fontSize };
