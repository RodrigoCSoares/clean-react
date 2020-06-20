import { AccountModel } from './../models/account-model';
import { Credential } from '../usecases/authentication';
import faker from 'faker';

export const mockCredential = (): Credential => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid(),
});
