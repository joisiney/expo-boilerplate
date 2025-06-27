import { ReactNode } from 'react';
import { TextProps } from 'react-native';

export namespace NText {
  export interface Props extends Omit<TextProps, 'style'> {
    children: ReactNode;
    variant?: Variant;
    color?: string;
    size?: Size;
    className?: string;
  }
  
  export type Variant = 'body' | 'heading' | 'caption' | 'label';
  export type Size = 'small' | 'medium' | 'large' | 'xlarge';
} 