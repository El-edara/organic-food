// Redux store configuration
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/CartSlice";
import categoryReducer from "./features/CategorySlice";
import searchReduser from "./features/SearchSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
    search: searchReduser,
  },
});

export default store;
