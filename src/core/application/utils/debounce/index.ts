import {useEffect, useRef} from 'react';
import {NDebounce} from './index.types';

export const useEventDebounce = <T extends (...args: any[]) => any>(
    handle: T,
    delay: number
) => {
    const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const handleDebounce = (...rest: Parameters<T>): void => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (delay === 0) {
            handle(...rest);
        } else {
            timeoutRef.current = setTimeout(() => handle(...rest), delay);
        }
    };
    return handleDebounce;
};

export const useEffectDebounce = ({
    mount,
    unmount,
    delay,
    deps
}: NDebounce.Props) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            mount?.();
        }, delay);
        return () => {
            clearTimeout(timeout);
            unmount?.();
        };
    }, deps);
};
