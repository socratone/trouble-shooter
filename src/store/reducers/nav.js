import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'nav',
  initialState: {
    isMenu: false
  },
  reducers: {
    toggleMenuButton: (state) => {
      if (state.isMenu) state.isMenu = false;
      else state.isMenu = true;
    }
  }
});

export const { toggleMenuButton } = slice.actions;
export default slice.reducer;