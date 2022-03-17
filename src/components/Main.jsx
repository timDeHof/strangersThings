import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import Navbar from "./Navbar";
import PostsList from "./PostsList";
import { fetchUser } from "../api";

const Main = () => {
  const [userObj, setUserObj] = useState({});
  const [token, setToken] = useState("");
  useEffect(() => {
    let localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      console.log("Token inside useEffect:", localStorageToken);
      const getUser = async () => {
        const response = await fetchUser(token);
        setUserObj(response);
      };
      getUser();
      console.log("This is userObj from Main.jsx:", userObj);

      // use token in a ajax fcn to get me object
      // pass the userObj into postList
      // in postList find user id and check if it is post author's Id
      //  if so, render a delete button and edit post form.
    }
  }, [token]);
  return (
    <div className="web-page">
      <Navbar />
      <Switch>
        <Route path="/postsList">
          <PostsList userObj={userObj} />
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
