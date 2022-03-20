import React from "react";

const Home = () => {
  return (
    <div className="homePage">
      <h1>
        HEY THERE STRANGER! <br />
        <br /> Welcome to STRANGER THING'S
      </h1>
      <br />
      <br />
      <p>The most popular place where Stranger's buy/sell Thing's!</p>
      <p>
        Please <a href="http://localhost:3000/LogInForm">Log In</a> to show the
        things you have to offer or you can just check out the{" "}
        <a href="http://localhost:3000/postsList">Post</a> from other strangers!
      </p>
    </div>
  );
};
export default Home;
