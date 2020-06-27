import React from 'react';
import { render } from '@testing-library/react';
import Login from './login';

describe('Login component', () => {
  test('Should not render error on start', () => {
    const { queryByRole } = render(<Login />);
    expect(queryByRole('error-message')).toBeNull();
  });
  test('Should not render loading spinner on start', () => {
    const { queryByRole } = render(<Login />);
    expect(queryByRole('loading-spinner')).toBeNull();
  });
});
