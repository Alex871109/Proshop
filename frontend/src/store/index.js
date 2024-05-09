import { configureStore } from '@reduxjs/toolkit';
 import { productsApi } from './apis/productsApi';
// import { surveysApi } from './apis/surveysApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
     [productsApi.reducerPath]: productsApi.reducer,
    // [surveysApi.reducerPath]: surveysApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(productsApi.middleware)
    //   .concat(surveysApi.middleware);
  },
});

setupListeners(store.dispatch);

 export { useGetProductsQuery, useGetProductByIdQuery } from './apis/productsApi';
// export {
//   useFetchSurveysQuery,
//   useAddSurveyMutation,
//   useDeleteSurveyMutation,
// } from './apis/surveysApi';
