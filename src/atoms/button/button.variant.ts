import {cva} from 'class-variance-authority';

export const buttonVariant = cva(
    'rounded-md items-center justify-center flex-row',
    {
        variants: {
            variant: {
                default: 'bg-blue-500 dark:bg-blue-600',
                destructive: 'bg-red-500 dark:bg-red-600',
                outline:
                    'border border-border bg-transparent dark:border-dark-border',
                secondary: 'bg-gray-100 dark:bg-gray-800',
                ghost: 'bg-transparent'
            },
            size: {
                sm: 'h-8 px-3',
                default: 'h-10 px-4',
                lg: 'h-12 px-8'
            },
            disabled: {
                true: 'opacity-50'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

export const textVariant = cva('font-medium', {
    variants: {
        variant: {
            default: 'text-white',
            destructive: 'text-white',
            outline: 'text-foreground dark:text-dark-foreground',
            secondary: 'text-gray-900 dark:text-gray-100',
            ghost: 'text-foreground dark:text-dark-foreground'
        },
        size: {
            sm: 'text-xs',
            default: 'text-sm',
            lg: 'text-base'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
