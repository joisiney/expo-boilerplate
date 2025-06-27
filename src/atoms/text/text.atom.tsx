import { StyleSheet, Text } from 'react-native';
import { NText } from './text.types';

export const TextAtom = ({ 
  children, 
  variant = 'body', 
  color = '#1a1a1a',
  size = 'medium' 
}: NText.Props) => {
  return (
    <Text style={[
      styles.base,
      styles[variant],
      styles[size],
      { color }
    ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: 'Quicksand_400Regular',
  },
  body: {
    fontFamily: 'Quicksand_400Regular',
  },
  heading: {
    fontFamily: 'Quicksand_700Bold',
  },
  caption: {
    fontFamily: 'Quicksand_400Regular',
    opacity: 0.7,
  },
  label: {
    fontFamily: 'Quicksand_500Medium',
  },
  small: {
    fontSize: 12,
  },
  medium: {
    fontSize: 16,
  },
  large: {
    fontSize: 20,
  },
  xlarge: {
    fontSize: 24,
  },
}); 