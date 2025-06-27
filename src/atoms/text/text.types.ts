import { ReactNode } from 'react';

export namespace NText {
  export interface Props {
    children: ReactNode;
    variant?: Variant;
    color?: string;
    size?: Size;
  }
  
  export type Variant = 'body' | 'heading' | 'caption' | 'label';
  export type Size = 'small' | 'medium' | 'large' | 'xlarge';
} 