import { HttpPostClient, HttpPostContent, HttpResponse, HttpStatusCode } from '../protocols/http';

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
