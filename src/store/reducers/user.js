import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: { isAdmin: false },
  reducers: {
    setAdmin: (state, action) => {
      state.isAdmin = action.payload.isAdmin;
    }
  }
});

export const { setAdmin } = slice.actions;
export default slice.reducer;