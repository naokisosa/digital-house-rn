import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { productApi, useGetAllProductsQuery } from './product';
import { setupApiStore } from '../../testUtils';
import { PRODUCTS_MOCK } from '@mocks';

beforeAll((): void => {
  fetchMock.resetMocks();
});

const wrapper: React.FC<any> = ({ children }) => {
  const storeRef = setupApiStore(productApi);
  return <Provider store={storeRef.store}>{children}</Provider>;
};

describe('useGetAllProductsQuery', () => {
  it('Success', async () => {
    fetchMock.mockResponse(JSON.stringify([PRODUCTS_MOCK]));
    const { result, waitForNextUpdate } = renderHook(() => useGetAllProductsQuery(undefined), {
      wrapper,
    });
    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);
    await waitForNextUpdate();

    const nextResponse = result.current;
    expect(nextResponse.data).not.toBeUndefined();
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isSuccess).toBe(true);
  });
});
