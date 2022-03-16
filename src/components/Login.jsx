import React, { useEffect, useState } from "react";

import { loginUser } from "../api";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //   const getToken = async () => {
  //     const response = await loginUser(username, password);
  //     console.log(response);
  //   };
  //   getToken();
  // }, []);

  return (
    <div className="logIn">
      <h1>
        Welcome to Stranger's Things <br />
        Please login to start the Bargin's!
      </h1>
      <form
        className="form"
        onSubmit={async (ev) => {
          ev.preventDefault();

          const result = await loginUser(username, password);
          console.log(result);
        }}
      >
        {" "}
        {/* // write a handleSubmit fcn */}
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(ev) => {
            setUserName(ev.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
        // ternary statement:
        {localStorage.getItem("token") ? (
          <button type="submit">Log out</button>
        ) : (
          <button type="submit">Log in</button>
        )}
      </form>
    </div>
  );
}

export default Login;
