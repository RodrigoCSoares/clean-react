export type HttpPostContent = {
  url: string;
};

export interface HttpPostClient {
  post(postContent: HttpPostContent): Promise<void>;
}
