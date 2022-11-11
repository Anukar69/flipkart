import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProductData: builder.query({
      query: () => `products`,
    }),
  }),
});

export const { useGetProductDataQuery } = Api;
console.log({ Api });
