import { Text } from 'react-native';
import { NText } from './text.types';

export const TextAtom = ({ 
  children, 
  variant = 'body', 
  color,
  size = 'medium',
  className = '',
  ...props
}: NText.Props) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'heading':
        return 'font-sans-bold';
      case 'caption':
        return 'font-sans opacity-70';
      case 'label':
        return 'font-sans-medium';
      default:
        return 'font-sans';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'text-xs';
      case 'large':
        return 'text-xl';
      case 'xlarge':
        return 'text-2xl';
      default:
        return 'text-base';
    }
  };

  const getColorClass = () => {
    if (color) return '';
    
    switch (variant) {
      case 'caption':
        return 'text-text-secondary';
      default:
        return 'text-text-primary';
    }
  };

  const combinedClassName = [
    getVariantClass(),
    getSizeClass(),
    getColorClass(),
    className
  ].filter(Boolean).join(' ');

  return (
    <Text 
      className={combinedClassName}
      style={color ? { color } : undefined}
      {...props}
    >
      {children}
    </Text>
  );
}; 