import React, { useEffect, useState } from "react";

import { fetchGetPosts, fetchUser } from "../api";
import CreatePostForm from "./CreatePostForm";
import SinglePost from "./SinglePost";
import SearchPost from "./SearchPost";

const PostsList = ({ userObj, token, isLoggedIn }) => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchGetPosts();
      setPosts(response);
    };
    getPosts();

    const getUser = async () => {
      const response = await fetchUser(token);
      setUserObj(response);
      setUserId(response.data.username);
    };
    getUser();
  }, []);

  return (
    <div className="posts">
      {isLoggedIn ? (
        <CreatePostForm posts={posts} setPosts={setPosts} />
      ) : (
        <h1>Please log in or register to make new post</h1>
      )}
      <SearchPost />

      <h1 className="postTitle">Posts</h1>
      {posts.map((post, i) => {
        //ternary or if in here somewhere to check if this post.authorid == userObj.id
        // return <SinglePost deleteButton={true}
        return <SinglePost key={i} post={post} userId={userId} token={token} />;
      })}
    </div>
  );
};

export default PostsList;
