import { TextProps } from 'react-native';
import { TextVariantProps } from './text.variant';

export namespace NText {
  export interface Props extends Omit<TextProps, 'style'>, TextVariantProps, TWithTestID {
    className?: string;
  }
} 