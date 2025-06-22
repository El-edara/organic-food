import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
    incrementQty: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
