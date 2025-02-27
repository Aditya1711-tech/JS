import { AppDispatch } from "../store";
import { getPosts } from "../../service/postService";
import { getPostsFailure, getPostsReducer } from "./postSlice";

export const getPostsAction = () => {
  return function (dispatch: AppDispatch) {
    getPosts()
      .then((res) => dispatch(getPostsReducer(res.data)))
      .catch(() => dispatch(getPostsFailure()));
  };
};
