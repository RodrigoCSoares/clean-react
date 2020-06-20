import { Credential } from './../../domain/usecases/authentication';
import { HttpPostClient, HttpPostContent } from '../protocols/http/http-post-client';

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: Credential;

  async post(postContent: HttpPostContent): Promise<void> {
    this.url = postContent.url;
    this.body = postContent.credential;
    return await Promise.resolve();
  }
}
