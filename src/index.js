import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main, Navbar, Header } from "./components";

ReactDOM.render(
  <Router>
    <Header />
    <Main />
    <Navbar />
  </Router>,
  document.getElementById("app")
);
