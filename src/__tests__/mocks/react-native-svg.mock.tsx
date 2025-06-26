// Mock para react-native-svg
import React from 'react';
import { View } from 'react-native';

const createMockComponent = (name: string) => {
  const MockComponent = (props: any) => React.createElement(View, props);
  MockComponent.displayName = name;
  return MockComponent;
};

export const Svg = createMockComponent('Svg');
export const Circle = createMockComponent('Circle');
export const Ellipse = createMockComponent('Ellipse');
export const G = createMockComponent('G');
export const Text = createMockComponent('Text');
export const TSpan = createMockComponent('TSpan');
export const TextPath = createMockComponent('TextPath');
export const Path = createMockComponent('Path');
export const Polygon = createMockComponent('Polygon');
export const Polyline = createMockComponent('Polyline');
export const Line = createMockComponent('Line');
export const Rect = createMockComponent('Rect');
export const Use = createMockComponent('Use');
export const Image = createMockComponent('Image');
export const Symbol = createMockComponent('Symbol');
export const Defs = createMockComponent('Defs');
export const LinearGradient = createMockComponent('LinearGradient');
export const RadialGradient = createMockComponent('RadialGradient');
export const Stop = createMockComponent('Stop');
export const ClipPath = createMockComponent('ClipPath');
export const Pattern = createMockComponent('Pattern');
export const Mask = createMockComponent('Mask');

export default Svg; 