import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "./redux/post/postAction";
import { AppDispatch, RootState } from "./redux/store";

export interface Post {
  id: number;
  userId: number;
  body: string;
  title: string;
}

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, isError } = useSelector(
    (state: RootState) => state.postReducer
  );

  if (isError) return <>Error</>;

  return (
    <>
      <button onClick={() => dispatch(getPostsAction())}>get data</button>
      {posts?.map((post) => post.title)}
    </>
  );
}

export default App;
