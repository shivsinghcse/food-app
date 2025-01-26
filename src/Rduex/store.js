import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import the cart reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart slice reducer
  },
});

export default store;
