import React, { useState } from "react";
import { editPost } from "../api";

const SinglePost = ({ post, token, userId }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");

  console.log("userId in SinglePost:", userId);
  const handleSubmit = async (e, postId) => {
    e.preventDefault();
    //console.log("submit");
    const post = {};

    if (newTitle !== "") {
      post.title = newTitle;
    }
    if (newDescription !== "") {
      post.description = newDescription;
    }
    if (newPrice !== "") {
      post.price = newPrice;
    }

    const data = await editPost(post, token, postId);
    console.log(data);
    console.log(post);

    //console.log("params:", post, token, postId);
  };
  const form = {};
  return (
    <div className="post" key={post._id}>
      {/* Title */}
      <h2>Title: {post.title}</h2>

      {/* Description */}
      <p className="description">{`Description: ${post.description}`}</p>

      {/* Author */}
      <p className="author">
        <strong>{`Author: ${post.author.username}`}</strong>
      </p>
      {/* Price */}
      <p className="price">{`Price: $ ${post.price}`}</p>

      {/* we need a section for will deliver */}
      <p className="Location">Location: {post.location}</p>
    </div>
  );
};

export default SinglePost;
