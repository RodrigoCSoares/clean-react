import { AccountModel } from '../models/account-model';

type Credential = {
  email: string;
  password: string;
};

export interface Authentication {
  auth: (credential: Credential) => Promise<AccountModel>;
}
