export const fontFamily = {
  DEFAULT: ['Quicksand_400Regular', 'sans-serif'],
  quicksand: {
    regular: ['Quicksand_400Regular', 'sans-serif'],
    medium: ['Quicksand_500Medium', 'sans-serif'],
    bold: ['Quicksand_700Bold', 'sans-serif'],
  },
  // Aliases para facilitar o uso
  sans: ['Quicksand_400Regular', 'sans-serif'],
  'sans-medium': ['Quicksand_500Medium', 'sans-serif'],
  'sans-bold': ['Quicksand_700Bold', 'sans-serif'],
  // Sistema fallback
  system: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
} as const;

export default fontFamily; 