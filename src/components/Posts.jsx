import React, { useEffect, useState } from "react";

import { fetchGetPosts } from "../api";
import CreatePost from "./CreatePost";

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
      <CreatePost />
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div className="post" key={post._id}>
            <h2>{`Title: ${post.title}`}</h2>
            <p>{`Description: ${post.description}`}</p>
            <p>
              <strong>{`Author: ${post.author.username}`}</strong>
            </p>
            <p>{`Price: ${post.price}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
