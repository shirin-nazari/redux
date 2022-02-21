import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./usersSlice";
export default function Users() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return <div>Users</div>;
}
