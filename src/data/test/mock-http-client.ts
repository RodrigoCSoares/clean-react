import { Credential } from './../../domain/usecases/authentication';
import { HttpPostClient, HttpPostContent } from '../protocols/http/http-post-client';
import { HttpResponse, HttpStatusCode } from '../protocols/http/http-response';

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: Credential;
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok,
  };

  async post(postContent: HttpPostContent): Promise<HttpResponse> {
    this.url = postContent.url;
    this.body = postContent.credential;
    return await Promise.resolve(this.response);
  }
}
