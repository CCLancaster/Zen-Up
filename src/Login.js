import React from "react";
import { Redirect } from "react-router-dom";
import UserLogin from "../components-d/UserLogin";

function userLogin() {
    onClick = {Redirect = "/welcome"}
  
  return (
    <div>
      <UserLogin />
    </div>
  );
}

export default userLogin;