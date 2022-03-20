import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import Navbar from "./Navbar";
import PostsList from "./PostsList";
import { fetchUser } from "../api";
import Home from "./Home";

const Main = () => {
  const [userObj, setUserObj] = useState({});
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let localStorageToken = localStorage.getItem("token");

    // const getUser = async () => {
    //   const response = await fetchUser(localStorageToken);
    //   setUserObj(response);

    if (localStorageToken) {
      setToken(localStorageToken);
      // getUser();
    }

    // use token in a ajax fcn to get me object
    // pass the userObj into postList
    // in postList find user id and check if it is post author's Id
    //  if so, render a delete button and edit post form.
  }, [token]);
  console.log("userObj:", userObj);
  console.log("Token inside useEffect:", token);
  console.log("So is the user logged in?", isLoggedIn);
  return (
    <div className="web-page">
      <Navbar />

      <Switch>
        <Route path="/postsList">
          <PostsList userObj={userObj} token={token} isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/loginForm">
          <LoginForm setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/signupForm">
          <SignUpForm setToken={setToken} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
