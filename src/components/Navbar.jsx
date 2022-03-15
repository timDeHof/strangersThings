import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="header">
      <h1 className="title">Stranger's Things</h1>
      <ul className="navBar">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/posts">Posts</Link>
        </li>
        <li className="link">
          <Link to="/LogIn">Log In</Link>
        </li>
        <li className="link">
          <Link to="/Signup">Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
