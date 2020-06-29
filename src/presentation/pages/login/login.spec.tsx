import React from 'react';
import { render } from '@testing-library/react';
import Login from './login';

describe('Login component', () => {
  test('should not render error on start', () => {
    const { queryByRole } = render(<Login />);
    expect(queryByRole('error-message')).toBeNull();
  });
  test('should not render loading spinner on start', () => {
    const { queryByRole } = render(<Login />);
    expect(queryByRole('loading-spinner')).toBeNull();
  });
  test('should disable submit button if invalid data on input', () => {
    const { getByText } = render(<Login />);
    const button = getByText('Entrar') as HTMLButtonElement;
    expect(button.disabled).toBeTruthy();
  });
});
