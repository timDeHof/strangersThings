import React, { useEffect, useState } from "react";

import { fetchGetPosts } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchGetPosts();
      setPosts(response);
    };
    getPosts();
  }, []);

  // fetch all posts

  console.log("posts:", posts);
  return (
    <div className="posts">
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div className="post" key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
