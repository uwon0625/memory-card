import React from 'react';
import { render } from '@testing-library/react-native';

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });

export * from '@testing-library/react-native';
export { customRender as render }; 