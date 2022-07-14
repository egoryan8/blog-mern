import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: {
    items: [],
    status: 'loading',
  },
  tags: {
    items: [],
    status: 'loading',
  },
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducer: {},
});

export const postsReducer = postSlice.reducer;
