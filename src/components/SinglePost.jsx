import React, { useState } from "react";

const SinglePost = ({ post }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className="post" key={post._id}>
      <h2>{`Title: ${post.title}`}</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Update Title</button>
      </form>
      <p>{`Description: ${post.description}`}</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update Description</button>
      </form>
      <p>
        <strong>{`Author: ${post.author.username}`}</strong>
      </p>

      <p>{`Price: ${post.price}`}</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Update Price</button>
      </form>
      {/* we need a section for will deliver */}
    </div>
  );
};

export default SinglePost;
