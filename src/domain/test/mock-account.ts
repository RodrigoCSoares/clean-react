import { AccountModel } from './../models';
import { Credential } from '../usecases';
import faker from 'faker';

export const mockCredential = (): Credential => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid(),
});
