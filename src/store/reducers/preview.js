import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'preview',
  initialState: { 
    isIndicator: false,
    isFullScreen: false
  },
  reducers: {
    setIndicator: (state, action) => {
      state.isIndicator = action.payload.isIndicator;
    },
    toggleScreenButton: state => {
      if (state.isFullScreen) state.isFullScreen = false;
      else state.isFullScreen = true;
    },
  }
});

export const { setIndicator, toggleScreenButton } = slice.actions;
export default slice.reducer;