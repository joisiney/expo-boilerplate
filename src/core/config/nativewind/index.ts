import {StyleProp, Appearance} from 'react-native';
import {useColorScheme} from 'nativewind';
import {create} from 'twrnc';
import './global.css';
import {colors} from './colors.js';

export * from './colors.js';
export * from './font-family.js';
export * from './font-size.js';

const _tw = create(require('../../../../tailwind-twrnc.config.js'));

export const getColorScheme = () => {
    return Appearance.getColorScheme() || 'light';
};

export const isDark = () => getColorScheme() === 'dark';

const processDarkClasses = (classString: string, darkMode?: boolean) => {
    const isDarkMode = darkMode !== undefined ? darkMode : isDark();

    if (!isDarkMode) {
        return classString.replace(/dark:[^\s]+/g, '').trim();
    }

    return classString.replace(/dark:([^\s]+)/g, '$1').trim();
};

export const getColor = (classString: string): string => {
    const processedClasses = processDarkClasses(classString);
    const style = _tw.style(processedClasses);

    const color = style.color || style.backgroundColor;
    if (typeof color === 'string') {
        return color;
    }
    if (typeof color === 'number') {
        return `#${color.toString(16).padStart(6, '0')}`;
    }

    return colors.dark.background.primary;
};

export const useClassNameToColor = (classString: string): string => {
    const {colorScheme} = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const processedClasses = processDarkClasses(classString, isDarkMode);
    const style = _tw.style(processedClasses);

    const color = style.color || style.backgroundColor;
    if (typeof color === 'string') {
        return color;
    }
    if (typeof color === 'number') {
        return `#${color.toString(16).padStart(6, '0')}`;
    }

    return colors.dark.background.primary;
};

export const tw = (strings: TemplateStringsArray, ...values: unknown[]) => {
    const result = strings.reduce(
        (acc, str, i) => acc + str + (values[i] ?? ''),
        ''
    );

    const processedClasses = processDarkClasses(result);
    return _tw.style(processedClasses) as StyleProp<{}>;
};
