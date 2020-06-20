import { Credential } from './../../../domain/usecases/authentication';
import { HttpResponse } from './http-response';
export type HttpPostContent = {
  url: string;
  credential?: Credential;
};

export interface HttpPostClient {
  post(postContent: HttpPostContent): Promise<HttpResponse>;
}
