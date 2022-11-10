import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/products'
  }),
  endpoints: (builder) => ({
    getdataByType: builder.query({
      query: (type) => `${type}/random`
    })
  })
});

export const { useGetDataByTypeQuery } = Api;
