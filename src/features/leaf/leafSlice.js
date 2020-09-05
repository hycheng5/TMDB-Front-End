import { createSlice } from '@reduxjs/toolkit';
import LeafApi from '../../api/LeafApi';
export const counterSlice = createSlice({
  name: 'leaf',
  initialState: {
    currentLeaf:{}
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
