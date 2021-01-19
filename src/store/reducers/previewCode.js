import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'previewCode',
  initialState: {
    html: '',
    css: '',
    js: ''
  },
  reducers: {
    setPreviewCode: (state, action) => {
      const { payload } = action;
      if (payload.html !== undefined) state.html = payload.html;
      if (payload.css !== undefined) state.css = payload.css;
      if (payload.js !== undefined) state.js = payload.js;
    }
  }
});

export const { setPreviewCode } = slice.actions;
export default slice.reducer;