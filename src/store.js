import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/Components/cart/counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Api } from "./Components/services/Api";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

setupListeners(store.dispatch);
