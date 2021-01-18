import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'troublesItems',
  initialState: [],
  reducers: {
    pushItems: (state, action) => {
      return state.concat(action.payload.items);
    },
  }
});

export const { pushItems } = slice.actions;
export default slice.reducer;