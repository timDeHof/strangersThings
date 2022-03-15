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
  }, []); // need to put something in the empty array to check if the state got changed, if it was changed .. it will re-render.
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log(response);
  };
  // not returning anything
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
