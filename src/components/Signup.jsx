import React, { useEffect, useState } from "react";
import { registerUser } from "../api";

function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const response = await registerUser();
      console.log(response);
    };
    getToken();
  }, []);
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log(response);
  };

  return (
    <div>
      <h1>Thank you for signing up!</h1>
      <form className="form" onSubmit={handleSubmit}>
        {" "}
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

export default SignUp;
