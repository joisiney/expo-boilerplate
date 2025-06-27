jest.mock('tailwind-variants', () => ({
  tv: jest.fn().mockImplementation((config) => {
    return jest.fn().mockImplementation((props = {}) => {
      const { variant = 'body', size = 'medium' } = props;
      return `${config.base || ''} variant-${variant} size-${size}`.trim();
    });
  }),
})); 