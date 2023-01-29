import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from './types';

export const BASE_URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1/';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
  keepUnusedDataFor: 0,
});

export const { useGetAllProductsQuery } = productApi;
