import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./Login";

const Navbar = (props) => {
  return (
    <div id="navbar">
      <nav>
        <Link to="/login">Log in</Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/Siteup">Site up</Link>
      </nav>
    </div>
  );
};

export default Navbar;
