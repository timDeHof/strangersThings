import React, { useState } from "react";
import { editPost } from "../api";
// import forms from singlePost
const EditForm = ({ post, token }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const handleSubmit = async (e, postId) => {
    e.preventDefault();

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
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, post._id);
      }}
    >
      {/* Title */}
      <h2>Title: {post.title}</h2>
      <input
        placeholder="title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      {/* Description */}
      <p className="description">Description: {post.description}</p>
      <input
        placeholder="description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />

      {/* Price */}
      <p className="price">Price: $ {post.price}</p>
      <input
        placeholder="price"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditForm;
