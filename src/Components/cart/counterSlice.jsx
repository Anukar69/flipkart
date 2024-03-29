import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: 1,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
      
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;



export default counterSlice.reducer;
