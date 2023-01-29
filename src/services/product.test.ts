import { PRODUCTS_MOCK } from '@mocks';
import fetchMock from 'jest-fetch-mock';
import { setupApiStore } from '../../testUtils';
import { BASE_URL, productApi } from './product';

beforeAll((): void => {
  fetchMock.resetMocks();
});

describe('Get all products', () => {
  const storeRef = setupApiStore(productApi);
  fetchMock.mockResponse(JSON.stringify({}));

  it('request is correct', () => {
    return storeRef.store
      .dispatch<any>(productApi.endpoints.getAllProducts.initiate(undefined))
      .then(() => {
        expect(fetchMock).toBeCalledTimes(1);
        const { method, url } = fetchMock.mock.calls[0][0] as Request;

        expect(method).toBe('GET');
        expect(url).toBe(`${BASE_URL}products`);
      });
  });

  it('successful response', () => {
    const storeRef = setupApiStore(productApi);
    fetchMock.mockResponse(JSON.stringify([PRODUCTS_MOCK]));
    return storeRef.store
      .dispatch<any>(productApi.endpoints.getAllProducts.initiate(undefined))
      .then((action: any) => {
        const { status, data, isSuccess } = action;
        expect(status).toBe('fulfilled');
        expect(isSuccess).toBe(true);
        expect(data).toStrictEqual([PRODUCTS_MOCK]);
      });
  });
});
