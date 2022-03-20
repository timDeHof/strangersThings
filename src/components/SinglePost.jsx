import React, { useState } from "react";

const SinglePost = ({ post, userId }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const form = (
    <div className="post" key={post._id}>
      {/* Title */}
      <h2>Title: {post.title}</h2>

      {/* Description */}
      <p className="description">Description: {post.description}</p>

      {/* Author */}
      <p className="author">
        <strong>Author: {post.author.username}</strong>
      </p>
      {/* Price */}
      <p className="price">Price: $ {post.price}</p>

      {/* we need a section for will deliver */}
      <p className="Location">Location: {post.location}</p>
    </div>
  );
  const editForm = (
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
  return <>{post.author.username === userId ? editForm : form}</>;
};

export default SinglePost;
