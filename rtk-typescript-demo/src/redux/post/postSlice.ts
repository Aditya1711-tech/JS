import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../App";

export interface InitialStateType {
  posts: Post[];
  isError: boolean;
}

const initialState: InitialStateType = {
  posts: [],
  isError: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostsReducer(state: InitialStateType, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
      state.isError = false;
    },
    getPostsFailure(state: InitialStateType) {
        state.posts = [];
        state.isError = true;
    }
  },
});

export default postSlice.reducer;
export const { getPostsReducer, getPostsFailure } = postSlice.actions;
