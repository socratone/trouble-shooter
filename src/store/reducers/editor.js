import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'editor',
  initialState: {
    pageHead: -1
  },
  reducers: {
    setPageHead: (state, action) => {
      state.pageHead = action.payload.pageHead;
    }
  }
});

export const { setPageHead } = slice.actions;
export default slice.reducer;