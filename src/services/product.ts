import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from './types';
import Config from 'react-native-config';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
  keepUnusedDataFor: 0,
});

export const { useGetAllProductsQuery } = productApi;
