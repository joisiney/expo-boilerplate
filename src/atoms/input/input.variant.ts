import {cva} from 'class-variance-authority';

export const inputVariant = cva(
    'border bg-background text-foreground placeholder:text-muted-foreground dark:border-dark-border dark:bg-dark-background dark:text-dark-foreground',
    {
        variants: {
            variant: {
                default: 'border rounded-md',
                outline: 'border-2 rounded-lg'
            },
            size: {
                sm: 'h-8 px-2 text-xs',
                default: 'h-10 px-3 py-2 text-sm',
                lg: 'h-12 px-4'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);
