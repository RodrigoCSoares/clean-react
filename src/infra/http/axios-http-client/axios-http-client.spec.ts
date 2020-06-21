import { mockPostRequest } from './../../../data/test';
import { AxiosHttpClient } from './axios-http-client';
import { mockAxiosInstace } from '../../test/mock-axios';
import axios from 'axios';
jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => ({
  sut: new AxiosHttpClient(),
  mockedAxios: mockAxiosInstace(),
});

describe('AxiosHttpClient', () => {
  test('Should call axios with correct content', async () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });
  test('Should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut();
    const httpResponsePromise = sut.post(mockPostRequest());
    const mockAxiosResultPromise = mockedAxios.post.mock.results[0].value;
    expect(httpResponsePromise).toEqual(mockAxiosResultPromise);
  });
});
