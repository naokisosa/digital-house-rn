import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from './types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6222994f666291106a29f999.mockapi.io/api/v1/',
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
