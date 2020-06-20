import { UnexpectedError } from './../../../domain/errors/unexpected-error';
import { InvalidCredentialError } from './../../../domain/errors/invalid-credential-erro';
import { HttpPostClient } from '../../protocols/http/http-post-client';
import { Credential } from '../../../domain/usecases/authentication';
import { HttpStatusCode } from '../../../data/protocols/http/http-response';

export class RemoteAuthentication {
  constructor(private readonly url: string, private readonly httpPostClient: HttpPostClient) {}

  async auth(credential: Credential): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      credential: credential,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialError();
      default:
        throw new UnexpectedError();
    }
  }
}
