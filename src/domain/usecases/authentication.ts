import { AccountModel } from '../models/account-model';

export type Credential = {
  email: string;
  password: string;
};

export interface Authentication {
  auth: (credential: Credential) => Promise<AccountModel>;
}
