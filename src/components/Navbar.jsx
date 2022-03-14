import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/LogIn">Log In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
