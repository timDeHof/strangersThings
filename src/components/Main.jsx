import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import Navbar from "./Navbar";
import PostsList from "./PostsList";

const Main = () => {
  return (
    <div className="web-page">
      <Navbar />
      <Switch>
        <Route path="/postsList">
          <PostsList />
        </Route>
        <Route path="/loginForm">
          <LoginForm />
        </Route>
        <Route path="/signupForm">
          <SignUpForm />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
