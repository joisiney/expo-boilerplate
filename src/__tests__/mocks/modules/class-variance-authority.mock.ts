jest.mock('class-variance-authority', () => ({
  cva: jest.fn().mockImplementation((base, config) => {
    return jest.fn().mockImplementation((props = {}) => {
      const { variant = 'body', size = 'medium' } = props;
      return `${base || ''} variant-${variant} size-${size}`.trim();
    });
  }),
})); 