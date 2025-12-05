// redux/cartSlice.js
"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //  Add to cart
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
        existing.totalPrice = existing.quantity * existing.price;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
          totalPrice: product.price,
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += product.price;
    },

    //  Remove a product completely
    removeProduct: (state, action) => {
      const id = action.payload;
      const toRemove = state.items.find((item) => item.id === id);

      if (toRemove) {
        state.totalQuantity -= toRemove.quantity;
        state.totalAmount -= toRemove.totalPrice;

        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    //  Increase quantity (+)
    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;

        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },

    //  Decrease quantity (-)
    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;

        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      } else {
        // if quantity becomes 0, remove item
        state.items = state.items.filter((i) => i.id !== id);
      }
    },

    //  Clear cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeProduct,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
