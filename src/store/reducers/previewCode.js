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
      if (payload.html) state.html = payload.html;
      if (payload.css) state.css = payload.css;
      if (payload.js) state.js = payload.js;
    }
  }
});

export const { setPreviewCode } = slice.actions;
export default slice.reducer;