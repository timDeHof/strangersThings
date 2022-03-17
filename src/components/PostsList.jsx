import React, { useEffect, useState } from "react";

import { fetchGetPosts } from "../api";
import CreatePostForm from "./CreatePostForm";

const PostsList = ({ userObj }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchGetPosts();
      setPosts(response);
    };
    getPosts();
    let user = userObj.data;
    console.log(user);
  }, []);
  // fetch all posts
  //pass the userObj into postList
  // in postList find user id and check if it is post author's Id
  //  if so, render a delete button and edit post form.
  //console.log("posts:", posts);
  return (
    <div className="posts">
      {localStorage.getItem("token") ? (
        <CreatePostForm posts={posts} setPosts={setPosts} />
      ) : null}
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

export default PostsList;
