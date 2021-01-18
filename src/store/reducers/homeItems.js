import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'homeItems',
  initialState: [],
  reducers: {
    setItems: (state, action) => {
      return action.payload;
    },
  }
});

export const { setItems } = slice.actions;
export default slice.reducer;