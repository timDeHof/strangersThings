import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";

import Navbar from "./Navbar";
import Posts from "./Posts";

const Main = () => {
  return (
    <div className="web-page">
      <Navbar />
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
