import { HttpResponse } from './http-response';
export type HttpPostContent<bodyType> = {
  url: string;
  body?: bodyType;
};

export interface HttpPostClient<bodyType, responseType> {
  post(postContent: HttpPostContent<bodyType>): Promise<HttpResponse<responseType>>;
}
