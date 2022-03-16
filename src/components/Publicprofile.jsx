//---------------------------------------------
// - Public Profile -
// should be where unauthorized users go first
//---------------------------------------------

import React from "react";
import Navbar from "./Navbar";
import Posts from "./Posts";

const Publicprofile = () => {
  return (
    <>
      <Navbar />
      <Posts />
    </>
  );
};

export default Publicprofile;
