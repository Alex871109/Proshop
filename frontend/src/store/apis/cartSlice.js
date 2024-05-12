import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: "", paymentMethod: "PayPal" };

const cartSlice = createSlice({
  name: cart,
  initialState,
  reducers: {
    //payload is an object conformed by the item itself and a aditional field 'qty'
    addToCart(state, action) {
      const { user, rating, numReviews, reviews, ...item } = action.payload;
      const existingItem = state.cartItems.find((i) => i._id === item._id);
      if (existingItem) {
        state.cartItems = state.cartItems.map((i) => {
          if (i._id === item.id) {
            return { ...i, qty: i.qty + item.qty };
          }
          return i;
        });
      } else {
        state.cartItems = [...state.cartItems, existingItem];
      }
    },
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
