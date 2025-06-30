import type {NButtonAtom} from '@/atoms/button';

export namespace NThemeToggleMolecule {
    export interface Props
        extends Omit<NButtonAtom.Props, 'onPress' | 'children'> {
        className?: string;
    }
}
