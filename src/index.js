import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main, Navbar } from "./components";

ReactDOM.render(
  <Router>
    <Main />
    <Navbar />
  </Router>,
  document.getElementById("app")
);
