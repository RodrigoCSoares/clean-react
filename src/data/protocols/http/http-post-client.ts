import { Credential } from './../../../domain/usecases/authentication';
export type HttpPostContent = {
  url: string;
  credential?: Credential;
};

export interface HttpPostClient {
  post(postContent: HttpPostContent): Promise<void>;
}
