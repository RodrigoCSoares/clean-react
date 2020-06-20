import { Authentication } from './../../../domain/usecases/authentication';
import { AccountModel } from './../../../domain/models/account-model';
import { UnexpectedError } from './../../../domain/errors/unexpected-error';
import { InvalidCredentialError } from './../../../domain/errors/invalid-credential-erro';
import { HttpPostClient } from '../../protocols/http/http-post-client';
import { Credential } from '../../../domain/usecases/authentication';
import { HttpStatusCode } from '../../../data/protocols/http/http-response';

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<Credential, AccountModel>,
  ) {}

  async auth(credential: Credential): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: credential,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialError();
      default:
        throw new UnexpectedError();
    }
  }
}
