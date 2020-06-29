export type ValidationResult = {
  errorMessage: string | null;
  isValid: boolean;
};

export interface Validation {
  validate(input: unknown): ValidationResult;
}
