import React, { useEffect, useState } from "react";

import { fetchGetPosts, fetchUser } from "../api";
import CreatePostForm from "./CreatePostForm";
import SinglePost from "./SinglePost";

const PostsList = ({ token, isLoggedIn }) => {
  const [userObj, setUserObj] = useState({});
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchGetPosts();
      setPosts(response);
    };
    getPosts();
    //console.log("Posts", posts);
    const getUser = async () => {
      const response = await fetchUser(token);
      setUserObj(response);
      setUserId(response.data.username);
    };
    getUser();
  }, []);
  console.log("This is userObj from the useEffect in PostList:", userObj);
  console.log("The user ID is:", userId);
  // let filteredPosts = posts.filter(() => {
  //   return posts.author._id === user;
  // });
  // console.log(filteredPosts);
  // fetch all posts
  //pass the userObj into postList
  // in postList find user id and check if it is post author's Id
  //  if so, render a delete button and edit post form.
  // console.log("posts:", posts);
  return (
    <div className="posts">
      {isLoggedIn ? (
        <CreatePostForm posts={posts} setPosts={setPosts} />
      ) : (
        <h1>Please log in or register to make new post</h1>
      )}
      {/* //<CreatePostForm posts={posts} setPosts={setPosts} /> */}

      <h1 className="postTitle">Posts</h1>
      {posts.map((post) => {
        return (
          <SinglePost
            key={post._id}
            userId={userId}
            post={post}
            token={token}
          />
        );
      })}
    </div>
  );
};

export default PostsList;
