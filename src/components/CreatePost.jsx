import React, { useState } from "react";
import Input from "./Input";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log(`title: ${title}`);
  };
  return (
    <div>
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
        <input
          type="checkbox"
          placeholder="willDeliver"
          id="willDeliver"
          value={willDeliver}
          onChange={(ev) => setWillDeliver(ev.target.value)}
        ></input>
        <label for="willDeliver">Will Deliver</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
