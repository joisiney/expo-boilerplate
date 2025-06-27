export const lightTheme = {
    colors: {
        background: {
            primary: '#FFFFFF',
            secondary: '#F8F9FA',
            tertiary: '#F1F3F4'
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
            tertiary: '#9E9E9E',
            inverse: '#FFFFFF'
        },
        border: {
            light: '#E0E0E0',
            medium: '#BDBDBD',
            dark: '#757575'
        },
        surface: {
            primary: '#FFFFFF',
            secondary: '#F5F5F5',
            elevated: '#FFFFFF'
        }
    }
};

export const darkTheme = {
    colors: {
        background: {
            primary: '#121212',
            secondary: '#1E1E1E',
            tertiary: '#2D2D2D'
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B3B3B3',
            tertiary: '#8A8A8A',
            inverse: '#121212'
        },
        border: {
            light: '#404040',
            medium: '#666666',
            dark: '#8A8A8A'
        },
        surface: {
            primary: '#1E1E1E',
            secondary: '#2D2D2D',
            elevated: '#353535'
        }
    }
};

export type ThemeColors = typeof lightTheme.colors;
