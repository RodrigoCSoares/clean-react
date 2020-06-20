import { Credential } from './../../domain/usecases/authentication';
import { HttpPostClient, HttpPostContent } from '../protocols/http/http-post-client';
import { HttpResponse, HttpStatusCode } from '../protocols/http/http-response';

export class HttpPostClientSpy<bodyType, responseType> implements HttpPostClient<bodyType, responseType> {
  url?: string;
  body?: bodyType;
  response: HttpResponse<responseType> = {
    statusCode: HttpStatusCode.ok,
  };

  async post(postContent: HttpPostContent<bodyType>): Promise<HttpResponse<responseType>> {
    this.url = postContent.url;
    this.body = postContent.body;
    return await Promise.resolve(this.response);
  }
}
