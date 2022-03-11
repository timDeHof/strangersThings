import React, { useEffect, useState } from "react";

const Main = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts"
      );
    };
  });

  return (
    <div>
      <h1>hello main</h1>
      <Posts />
      <Form />
    </div>
  );
};

export default Main;
