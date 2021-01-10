import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'preview',
  initialState: { isIndicator: false },
  reducers: {
    setIndicator: (state, action) => {
      state.isIndicator = action.payload.isIndicator;
    }
  }
});

export const { setIndicator } = slice.actions;
export default slice.reducer;