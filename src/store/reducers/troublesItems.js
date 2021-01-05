import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'troublesItems',
  initialState: [],
  reducers: {
    setTroublesItems: (state, action) => {
      return action.payload;
    }
  }
});

export const { setTroublesItems } = slice.actions;
export default slice.reducer;