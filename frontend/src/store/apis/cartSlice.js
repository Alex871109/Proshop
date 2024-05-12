import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: "", paymentMethod: "PayPal" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //payload is an object conformed by the item itself and a aditional field 'qty'
    addToCart(state, action) {
      const array = state.cartItems;
      console.log("cartItems:", array);
      // const { user, rating, numReviews, reviews, ...item } = action.payload;

      // if(state)
      // const existingItem = state.cartItems.find((i) => i._id === item._id);
      // if (existingItem) {
      //   state.cartItems = state.cartItems.map((i) => {
      //     if (i._id === item.id) {
      //       return { ...i, qty: i.qty + item.qty };
      //     }
      //     return i;
      //   });
      // } else {
      //   state.cartItems = [...state.cartItems, action.payload];
      // }

      // localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart(state, action) {
      const idToRemove = action.payload;
      state.cartItems.filter((i) => i._id !== idToRemove);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
