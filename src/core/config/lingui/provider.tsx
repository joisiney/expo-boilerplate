import React, {ReactNode} from 'react';
import {I18nProvider} from '@lingui/react';
import {i18n} from './index';

interface LinguiProviderProps {
    children: ReactNode;
}

export const LinguiProvider: React.FC<LinguiProviderProps> = ({children}) => {
    return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};
