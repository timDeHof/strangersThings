import React, { useState } from "react";
import { registerUser } from "../api";

function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");

  return (
    <div className="signUp">
      <h1>
        Don't have an account? <br /> Sign up today!
      </h1>
      <form
        className="form"
        onSubmit={async (ev) => {
          ev.preventDefault();

          const result = await registerUser(username, password);

          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
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
        <input
          type="confirmPassword"
          value={confirmPassword}
          placeholder="confirmPassword"
          onChange={(ev) => {
            setConfirmPassword(ev.target.value);
          }}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
