import {t} from '@lingui/core/macro';
import {useTheme} from '@/core/config/theme';

export const useUseCase = () => {
    const {theme, effectiveTheme, toggleTheme} = useTheme();

    const getThemeIcon = () => {
        if (theme === 'light') return '☀️';
        if (theme === 'dark') return '🌙';
        return '🔄'; // system
    };

    const getThemeLabel = () => {
        if (theme === 'light') return t`Claro`;
        if (theme === 'dark') return t`Escuro`;
        return t`Sistema`;
    };

    const getEffectiveThemeLabel = () => {
        return effectiveTheme === 'light' ? t`Claro` : t`Escuro`;
    };

    return {
        toggleTheme,
        getThemeIcon,
        getThemeLabel,
        getEffectiveThemeLabel
    };
};
