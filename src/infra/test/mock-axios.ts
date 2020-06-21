import axios from 'axios';
import faker from 'faker';

export const mockAxiosInstace = (): jest.Mocked<typeof axios> => {
  const mockedAxiosInstance = axios as jest.Mocked<typeof axios>;
  const mockedAxiosResult = {
    data: faker.random.objectElement(),
    status: faker.random.number(),
  };
  mockedAxiosInstance.post.mockResolvedValue(mockedAxiosResult);
  return mockedAxiosInstance;
};
