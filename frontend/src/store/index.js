import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "./apis/productsApiSlice";
// import { surveysApi } from './apis/surveysApi';
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    // [surveysApi.reducerPath]: surveysApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApiSlice.middleware);
    //   .concat(surveysApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useGetProductsQuery,
  useGetProductByIdQuery,
} from "./apis/productsApiSlice";
// export {
//   useFetchSurveysQuery,
//   useAddSurveyMutation,
//   useDeleteSurveyMutation,
// } from './apis/surveysApi';
