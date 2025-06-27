import { cva, type VariantProps } from 'class-variance-authority';

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const textVariant = cva('font-sans text-text-primary', {
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

export const getTextClasses = (
  variant?: VariantProps<typeof textVariant>['variant'],
  size?: VariantProps<typeof textVariant>['size'],
  className?: string
) => {
  return cn(textVariant({ variant, size }), className);
};

export type TextVariantProps = VariantProps<typeof textVariant>; 