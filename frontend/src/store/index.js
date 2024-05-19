import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "./apis/productsApiSlice";
 import  { addToCart,removeFromCart, cartReducer } from "./apis/cartSlice";

import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
     cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApiSlice.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useGetProductsQuery,
  useGetProductByIdQuery,
} from "./apis/productsApiSlice";
 export {addToCart, removeFromCart} 

