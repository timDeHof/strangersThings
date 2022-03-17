import React, { useState } from "react";
import { editPost } from "../api";

const SinglePost = ({ post, token }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const handleSubmit = async (e, postId) => {
    e.preventDefault();
    //console.log("submit");
    const post = {
      post: {
        title: `${newTitle}`,
        description: `${newDescription}`,
        price: `${newPrice}`,
        // location: `${location}`,
        // willDeliver: `${willDeliver}`,
      },
    };
    const data = await editPost(post, token, postId);
    console.log(data);
  };
  return (
    <div className="post" key={post._id}>
      {/* Title */}
      <h2>{`Title: ${post.title}`}</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e, post._id);
        }}
      >
        <input
          placeholder="title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit">Update Title</button>
      </form>
      {/* Description */}
      <p>{`Description: ${post.description}`}</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button type="submit">Update Description</button>
      </form>
      {/* Author */}
      <p>
        <strong>{`Author: ${post.author.username}`}</strong>
      </p>
      {/* Price */}
      <p>{`Price: ${post.price}`}</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
        <button type="submit">Update Price</button>
      </form>

      {/* we need a section for will deliver */}
    </div>
  );
};

export default SinglePost;
