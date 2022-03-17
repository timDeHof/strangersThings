import React, { useState } from "react";

const SinglePost = ({ token, post, posts, setPost }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  return (
    <div className="post" key={post._id}>
      <h2>{`Title: ${post.title}`}</h2>
      <p>{`Description: ${post.description}`}</p>
      <p>
        <strong>{`Author: ${post.author.username}`}</strong>
      </p>
      <p>{`Price: ${post.price}`}</p>
    </div>
  );
};

export default SinglePost;
