import React, { useState } from "react";
import { createPost } from "../api";

function CreatePostForm({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const token = localStorage.getItem("token");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const post = {
      post: {
        title: `${title}`,
        description: `${description}`,
        price: `${price}`,
        location: `${location}`,
        willDeliver: `${willDeliver}`,
      },
    };

    const result = await createPost(post, token);
    let newPost = result.data.post;
    setPosts([newPost, ...posts]);
    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
    setWillDeliver("");
  };
  return (
    <div className="createPostForm">
      <h3>Create a Post </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(ev) => {
            setTitle(ev.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        ></input>
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        ></input>
        <input
          type="text"
          placeholder="location"
          value={location}
          onChange={(ev) => setLocation(ev.target.value)}
        ></input>
        <span className="checkbox">
          <input
            type="checkbox"
            placeholder="willDeliver"
            id="willDeliver"
            value={willDeliver}
            onChange={(ev) => setWillDeliver(ev.target.value)}
          ></input>{" "}
        </span>
        <p className="cpWillDeliver">
          <label htmlFor="willDeliver">Will Deliver</label>
        </p>

        <p className="cpSubmit">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}

export default CreatePostForm;
