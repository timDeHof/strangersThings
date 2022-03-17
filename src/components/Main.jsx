import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import Navbar from "./Navbar";
import PostsList from "./PostsList";

const Main = () => {
  const [userObj, setUserObj] = useState({});
  const [token, setToken] = useState("");
  useEffect(() => {
    let localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      console.log("Token inside useEffect:", localStorageToken);
    }
  }, [token]);
  return (
    <div className="web-page">
      <Navbar />
      <Switch>
        <Route path="/postsList">
          <PostsList />
        </Route>
        <Route path="/loginForm">
          <LoginForm setToken={setToken} />
        </Route>
        <Route path="/signupForm">
          <SignUpForm setToken={setToken} />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
