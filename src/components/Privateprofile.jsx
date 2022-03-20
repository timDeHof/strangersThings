//---------------------------------------------
// - Private Profile -
// Functions:
// 1. Should be where Authorized users go
// 2. Should show their posts
// 3. Navbar should not have login and sign up
//    but have a logout button only
// 4. Allow the user to create new posts
// 5. Allow the user to message other users' posts
//----------------------------------------------- //
//                   CSS IDEA                     //
//----------------------------------------------- //
//                    NAV-BAR                     //
//----------------------------------------------- //
//        POST           |          CREATE        //
//        LIST           |           POST         //
//                       |           FORM         //
//                       |                        //
//----------------------------------------------- //
import React, { useState } from "react";
import { fetchUser } from "../api";

const PrivateProfile = ({ token }) => {
  const [profileName, setProfileName] = useState("");
  const getProfile = async () => {
    const response = await fetchUser(token);
    setProfileName(response.data.username);
  };
  getProfile();

  return (
    <>
      {/* this will greet the user after they log in */}
      <h1 className="Profile">{`Welcome: ${profileName}!`}</h1>
      {/* These are the user's post */}
      <h3> User Post(s) :</h3>
      {/* This is the users private messages */}
      <h3> Message(s) : </h3>
    </>
  );
};

export default PrivateProfile;
