import { Text } from 'react-native';
import { NText } from './text.types';
import { textVariant } from './text.variant';

export const TextAtom = ({ 
  children, 
  variant = 'body', 
  color,
  size = 'medium',
  className = '',
  ...props
}: NText.Props) => {
  const variantClasses = textVariant({ variant, size });

  return (
    <Text 
      className={`${variantClasses} ${className}`}
      style={color ? { color } : undefined}
      {...props}
    >
      {children}
    </Text>
  );
}; 