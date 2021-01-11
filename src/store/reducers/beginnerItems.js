import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'beginnerItems',
  initialState: [],
  reducers: {
    setBeginnerItems: (state, action) => {
      return action.payload;
    }
  }
});

export const { setBeginnerItems } = slice.actions;
export default slice.reducer;