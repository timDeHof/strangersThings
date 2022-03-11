import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignIn from "./SignIn";

const Navbar = (props) => {
  return (
    <div id="navbar">
      <nav>
        <Login />
        <SignIn />
        {/* <Link to="/login">Log in</Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/siteup">Site up</Link> */}
      </nav>
      {/* <Route path="/login">
        <Login />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/siteup">
        <SiteMap />
      </Route> */}
    </div>
  );
};

export default Navbar;
