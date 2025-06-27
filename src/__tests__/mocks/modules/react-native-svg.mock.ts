/* eslint-disable @typescript-eslint/no-require-imports */
jest.mock('react-native-svg', () => {
  const { createElement } = require('react');
  const { View } = require('react-native');

  const createMockComponent = (name: string) => {
    const MockComponent = (props: any) => createElement(View, props);
    MockComponent.displayName = name;
    return MockComponent;
  };

  const SvgComponent = createMockComponent('Svg');

  return {
    __esModule: true,
    default: SvgComponent,
    Svg: SvgComponent,
    Circle: createMockComponent('Circle'),
    Ellipse: createMockComponent('Ellipse'),
    G: createMockComponent('G'),
    Text: createMockComponent('Text'),
    TSpan: createMockComponent('TSpan'),
    TextPath: createMockComponent('TextPath'),
    Path: createMockComponent('Path'),
    Polygon: createMockComponent('Polygon'),
    Polyline: createMockComponent('Polyline'),
    Line: createMockComponent('Line'),
    Rect: createMockComponent('Rect'),
    Use: createMockComponent('Use'),
    Image: createMockComponent('Image'),
    Symbol: createMockComponent('Symbol'),
    Defs: createMockComponent('Defs'),
    LinearGradient: createMockComponent('LinearGradient'),
    RadialGradient: createMockComponent('RadialGradient'),
    Stop: createMockComponent('Stop'),
    ClipPath: createMockComponent('ClipPath'),
    Pattern: createMockComponent('Pattern'),
    Mask: createMockComponent('Mask')
  };
}); 