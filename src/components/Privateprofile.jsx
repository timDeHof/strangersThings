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
import React from "react";
import CreatePostForm from "./CreatePostForm";
import Navbar from "./Navbar";
import Posts from "./PostsList";

const PrivateProfile = () => {
  return (
    <>
      <Navbar />
      <Posts />
      <CreatePostForm />
    </>
  );
};

export default PrivateProfile;
