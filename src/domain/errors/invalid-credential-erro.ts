export class InvalidCredentialError extends Error {
  constructor() {
    super('Crendenciais invalidas');
    this.name = 'InvalidCredentialError';
  }
}
