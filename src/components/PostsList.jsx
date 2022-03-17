import React, { useEffect, useState } from "react";

import { fetchGetPosts } from "../api";
import CreatePostForm from "./CreatePostForm";
import SinglePost from "./SinglePost";

const PostsList = ({ userObj }) => {
  const [posts, setPosts] = useState([]);

  console.log("This is userObj first into PostList", { userObj });
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchGetPosts();
      setPosts(response);
    };
    getPosts();
    let user = userObj.data;
    console.log("This is userObj from the useEffect in PostList:", user);
  }, []);
  // fetch all posts
  //pass the userObj into postList
  // in postList find user id and check if it is post author's Id
  //  if so, render a delete button and edit post form.
  //console.log("posts:", posts);
  return (
    <div className="posts">
      <CreatePostForm posts={posts} setPosts={setPosts} />

      <h1>Posts</h1>
      {posts.map((post) => {
        return <SinglePost key={post._id} post={post} />;
      })}
    </div>
  );
};

export default PostsList;
