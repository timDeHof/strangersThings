import React, { useEffect, useState } from "react";

import { registerUser } from "../api";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const response = await registerUser();
      console.log(response);
    };
    getToken();
  }, []);

  return (
    <div className="logIn">
      <h1>Please log in!</h1>
      <form className="form" onSubmit={true}>
        {" "}
        // write a handleSubmit fcn
        <input
          type="text"
          placeholder="username"
          onChange={(ev) => {
            setUserName(ev.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
