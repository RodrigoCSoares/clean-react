import { HttpResponse } from './../../../data/protocols/http/http-response';
import { HttpPostContent, HttpPostClient } from './../../../data/protocols/http/http-post-client';
import axios from 'axios';

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post(content: HttpPostContent<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(content.url, content.body);
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
