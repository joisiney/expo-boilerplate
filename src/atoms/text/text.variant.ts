import { tv } from 'tailwind-variants';

export const textVariant = tv({
  base: 'font-sans text-text-primary',
  variants: {
    variant: {
      body: 'font-sans text-base',
      heading: 'font-sans-bold text-lg',
      caption: 'font-sans text-sm text-text-secondary opacity-70',
      label: 'font-sans-medium text-base',
    },
    size: {
      small: 'text-xs',
      medium: 'text-base',
      large: 'text-xl',
      xlarge: 'text-2xl',
    },
  },
  defaultVariants: {
    variant: 'body',
    size: 'medium',
  },
}); 