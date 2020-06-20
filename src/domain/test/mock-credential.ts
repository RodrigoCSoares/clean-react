import { Credential } from '../usecases/authentication';
import faker from 'faker';

export const mockCredential = (): Credential => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
