import { AccountModel } from './../../../domain/models';
import { HttpPostClient, HttpStatusCode } from '../../protocols/http';
import { Authentication, Credential } from './../../../domain/usecases';
import { UnexpectedError, InvalidCredentialError } from './../../../domain/errors';

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
