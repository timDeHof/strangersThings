import React, { useState } from "react";

import { loginUser } from "../api";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //console.log("token is:", localStorage.getItem("token"));
  // isLogIn = () => {};
  return (
    <div className="logIn">
      <h1>
        Welcome to Stranger's Things <br />
        Please login to start the Bargain's!
      </h1>
      <form
        className="form"
        onSubmit={async (ev) => {
          ev.preventDefault();

          const result = await loginUser(username, password);

          console.log(result);
        }}
      >
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(ev) => {
            setUserName(ev.target.value);
          }}
          min="10"
          required
        />
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
          min="10"
          required
        />
        {localStorage.getItem("token") ? (
          <button
            type="submit"
            onClick={() => {
              //localStorage.clear();
            }}
          >
            Log out
          </button>
        ) : (
          <button
            type="submit"
            // onClick={() => {
            //   localStorage.setItem("token", );
            // }}
          >
            Log in
          </button>
        )}
      </form>
    </div>
  );
}

export default Login;
