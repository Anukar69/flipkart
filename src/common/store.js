import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Components/cart/counterSlice';

export const store = configureStore({
  reducer: {
    
    counter: counterReducer,
  },
});
