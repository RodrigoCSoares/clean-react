import { HttpPostContent } from '../protocols/http';
import faker from 'faker';

export const mockPostRequest = (): HttpPostContent<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement(),
});
