import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Login from './login';

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (): SutTypes => {
  const sut = render(<Login />);
  return {
    sut,
  };
};

describe('Login component', () => {
  test('should not render error on start', () => {
    const { queryByRole } = makeSut().sut;
    expect(queryByRole('error-message')).toBeNull();
  });
  test('should not render loading spinner on start', () => {
    const { queryByRole } = makeSut().sut;
    expect(queryByRole('loading-spinner')).toBeNull();
  });
  test('should disable submit button if invalid data on input', () => {
    const { getByText } = makeSut().sut;
    const button = getByText('Entrar') as HTMLButtonElement;
    expect(button.disabled).toBeTruthy();
  });
  test('required fields status title should be "Campo obrigatório"', () => {
    const { queryAllByTitle } = makeSut().sut;
    const requiredFieldsStatusIcon = queryAllByTitle('Campo obrigatório');
    expect(requiredFieldsStatusIcon).toHaveLength(2);
  });
  test('required fields status icon should be 🔴', () => {
    const { queryAllByText } = makeSut().sut;
    const requiredFieldsStatusIcon = queryAllByText('🔴');
    expect(requiredFieldsStatusIcon).toHaveLength(2);
  });
});
