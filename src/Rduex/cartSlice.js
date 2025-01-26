import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [], // Holds the cart items
  totalQuantity: 0, // Tracks total quantity of items
  totalPrice: 0, // Tracks total price of the cart
  darkMode: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      // Check if item already exists
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity
      } else {
        state.items.push({...item, quantity: 1}); // Add new item
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    removeItem: (state, action) => {
      const itemId = action.payload;

      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;

        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },

    increaseQuantity: (state, action) => {
      const itemId = action.payload;

      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += existingItem.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;

      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },
    toogleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  toogleTheme,
} = cartSlice.actions;
export default cartSlice.reducer;
