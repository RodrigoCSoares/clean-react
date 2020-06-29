import React from 'react';
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react';
import Login from './login';
import { Validation, ValidationResult } from '@/presentation/pages/protocols/validation';

type SutTypes = {
  sut: RenderResult;
  validationSpy: ValidationSpy;
};

class ValidationSpy implements Validation {
  errorMessage: string;
  input: unknown;

  validate(input: unknown): ValidationResult {
    this.input = input;
    return {
      errorMessage: this.errorMessage,
      isValid: false,
    };
  }
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const sut = render(<Login validation={validationSpy} />);
  return {
    sut,
    validationSpy,
  };
};

describe('Login component', () => {
  afterEach(cleanup);

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
  test('should call validation with correct email', () => {
    const { sut, validationSpy } = makeSut();
    const emailInput = sut.getByPlaceholderText('Digite seu e-mail');
    fireEvent.input(emailInput, { target: { value: 'any_email' } });
    expect(validationSpy.input).toEqual({
      email: 'any_email',
    });
  });
  test('should call validation with correct password', () => {
    const { sut, validationSpy } = makeSut();
    const passwordInput = sut.getByPlaceholderText('Digite sua senha');
    fireEvent.input(passwordInput, { target: { value: 'any_password' } });
    expect(validationSpy.input).toEqual({
      password: 'any_password',
    });
  });
});
