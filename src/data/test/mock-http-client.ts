import { HttpPostClient, HttpPostContent } from '../protocols/http/http-post-client';

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  async post(postContent: HttpPostContent): Promise<void> {
    this.url = postContent.url;
    return await Promise.resolve();
  }
}
