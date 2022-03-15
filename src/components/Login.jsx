import React from "react";
import Input from "./Input";

function Login() {
  return (
    <div>
      <h1>Please log in!</h1>
      <form className="form">
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
