process.env.EXPO_PUBLIC_ENV = 'jest';
(global as any).setImmediate =
    (global as any).setImmediate ||
    ((fn: any, ...args: any[]) => setTimeout(fn, 0, ...args));
(global as any).clearImmediate =
    (global as any).clearImmediate || ((id: any) => clearTimeout(id));
(global as any).requestAnimationFrame =
    (global as any).requestAnimationFrame || ((cb: any) => setTimeout(cb, 0));
(global as any).cancelAnimationFrame =
    (global as any).cancelAnimationFrame || ((id: any) => clearTimeout(id));

import '@testing-library/jest-native/extend-expect';
import './utils/auto-import-modules';

// Importa os mocks dos módulos
import './mocks/modules/global-css.mock';
import './mocks/modules/react-native-svg.mock';
