import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function User() {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) return <h3>User not set</h3>;
  return <div>Profile : {user.userName}</div>;
}

export default User;
