import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'editor',
  initialState: {
    pageHead: -1,
    title: '',
    category: 'js',
    page: { 
      items: [], 
      previewCode: { 
        html: '',
        css: '',
        js: ''
      }
    }
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload.title;
    },
    setCategory: (state, action) => {
      state.category = action.payload.category;
    },
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
    setPageHead: (state, action) => {
      state.pageHead = action.payload.pageHead;
    }
  }
});

export const { 
  setTitle, 
  setCategory, 
  setPage, 
  setPageHead
} = slice.actions;
export default slice.reducer;