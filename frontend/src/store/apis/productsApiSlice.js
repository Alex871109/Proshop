import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PRODUCTS_URL } from '../../constants';

const productsApiSlice = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({}),
  endpoints(builder) {
    return {
      getProducts: builder.query({
        providesTags: ['products'],
        keepUnusedDataFor: 5,
        query: () => {
          return {
            url: PRODUCTS_URL,
            method: 'GET',
          };
        },
      }),

      getProductById: builder.query({
        // providesTags: ['product'],
        keepUnusedDataFor: 5,
        query: (id) => {
          return {
            url: `${PRODUCTS_URL}/${id}`,
            method: 'GET',
          };
        },
      }),

      //   addSurvey: builder.mutation({
      //     invalidatesTags: [{ type: 'surveys' }],
      //     query: (survey) => {
      //       return {
      //         url: '/api/surveys/new',
      //         body: survey,
      //         method: 'POST',
      //       };
      //     },
      //   }),

      //   deleteSurvey: builder.mutation({
      //     invalidatesTags: [{ type: 'surveys' }],
      //     query: (id) => {
      //       return {
      //         url: `/api/surveys/delete/${id}`,
      //         method: 'DELETE',
      //       };
      //     },
      //   }),
    };
  },
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApiSlice;
export { productsApiSlice };
