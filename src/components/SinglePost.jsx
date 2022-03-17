import React, { useState } from "react";
import { editPost } from "../api";

const SinglePost = ({ token, post, posts, setPost }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(ev) => {
          setTitle(ev.target.value);
        }}
      ></input>
      <button type="submit">Update Title</button>
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      ></input>
      <button type="submit">Update Description</button>
      <input
        type="text"
        placeholder="price"
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
      ></input>
      <button type="submit">Update Price</button>
      <input
        type="text"
        placeholder="location"
        value={location}
        onChange={(ev) => setLocation(ev.target.value)}
      ></input>
      <button type="submit">Update Location</button>
      <span>
        <input
          type="checkbox"
          placeholder="willDeliver"
          id="willDeliver"
          value={willDeliver}
          onChange={(ev) => setWillDeliver(ev.target.value)}
        ></input>
        <label htmlFor="willDeliver">Will Deliver</label>
      </span>
      <button type="submit">Update Delivery</button>
    </form>
  );
};

export default SinglePost;
