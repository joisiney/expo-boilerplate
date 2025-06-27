jest.mock('nativewind', () => ({
  styled: jest.fn((Component) => Component),
  withNativeWind: jest.fn((config) => config),
})); 