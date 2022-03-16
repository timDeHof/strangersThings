//---------------------------------------------
// - Public Profile -
// should be where unauthorized users go first
//---------------------------------------------

import React from "react";
import Navbar from "./Navbar";
import Posts from "./PostsList";

const Privateprofile = () => {
  return (
    <>
      <Navbar />
      <Posts />
    </>
  );
};

export default Privateprofile;
