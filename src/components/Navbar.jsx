import React from "react";
import { BrowserRouter as router, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignIn from "./SignIn";

const Navbar = (props) => {
  return (
    <router>
      <div id="navbar">
        <ul>
          <li>
            <link to="/">Home</link>
          </li>
          <li to="/posts">Posts</li>
          <li to="/LogIn">Log In</li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path=" /posts">
          <Posts />
        </Route>
        <Route path=" /LogIn">
          <Login />
        </Route>
      </Switch>
    </router>
  );
};

export default Navbar;
