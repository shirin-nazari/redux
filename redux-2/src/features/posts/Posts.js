import React, { useEffect } from "react";
import { getPosts } from "./postsSlice";
import { useDispatch } from "react-redux";
const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts({ limit: 5 }));
  }, [dispatch]);
  return (
    <div>
      <h1>posts...</h1>
    </div>
  );
};
export default Posts;
