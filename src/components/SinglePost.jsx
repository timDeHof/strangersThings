import React, { useState } from "react";
import { editPost, deletePost } from "../api";

const SinglePost = ({ post, userId, token }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");

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

    const data = await editPost(post, token, post._id);
    //console.log(data);
    //console.log(post);
  };

  const handleDelete = async (token) => {
    console.log("post id:", post);
    console.log("deleted!");
    const data = await deletePost(token, post._id);
  };

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
      className="post"
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
      {/* Author */}
      <p className="author">
        <strong>Author: {post.author.username}</strong>
      </p>
      {/* Price */}
      <p className="price">Price: $ {post.price}</p>
      <input
        placeholder="price"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />
      <button type="submit">Update</button>
      <button onClick={handleDelete}>Delete</button>
    </form>
  );
  return <>{post.author.username === userId ? editForm : form}</>;
};

export default SinglePost;
