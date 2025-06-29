import {DependencyList} from 'react';

export namespace NDebounce {
    export type Props = {
        mount?: () => void;
        unmount?: () => void;
        delay: number;
        deps?: DependencyList;
    };
}
