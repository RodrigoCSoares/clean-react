export class UnexpectedError extends Error {
  constructor() {
    super('Erro inesperado, tente novamente mais tarde.');
    this.name = 'UnexpectedError';
  }
}
