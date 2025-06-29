import {FC} from 'react';

export const hocAdditionalProps = <T extends object>(
    WrappedComponent?: FC<T>,
    defaultProps?: Partial<T>
) => {
    return (props: T & {isHidden?: boolean}) => {
        if (!WrappedComponent || props.isHidden) return null;
        return <WrappedComponent {...(defaultProps || {})} {...props} />;
    };
};
