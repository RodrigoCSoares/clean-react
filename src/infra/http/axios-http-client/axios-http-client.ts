import { HttpPostContent } from './../../../data/protocols/http/http-post-client';
import axios from 'axios';

export class AxiosHttpClient {
  async post(content: HttpPostContent<any>): Promise<void> {
    await axios.post(content.url);
  }
}
