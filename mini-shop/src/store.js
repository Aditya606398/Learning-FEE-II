import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// The store holds all app state. Right now we only have the cart.
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
