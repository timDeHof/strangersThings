import React, { useState } from "react";
import { registerUser } from "../api";

function SignUp({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Thank you for signing up!</h1>
      <form
        className="form"
        onSubmit={async (ev) => {
          ev.preventDefault();

          const result = await registerUser(username, password);

          localStorage.setItem("token", result.data.token);
        }}
      >
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(ev) => {
            setUserName(ev.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
