export const useCartTotals = (cartItems) => {
  return cartItems.reduce(
    (acc, item) => {
      return {
        totalQty: acc.totalQty + item.qty,
        totalPrice: Number((acc.totalPrice + item.price * item.qty).toFixed(2)),
      };
    },
    { totalQty: 0, totalPrice: 0 }
  );
};
