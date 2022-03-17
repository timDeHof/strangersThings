import React, { useState } from "react";

const SinglePost = ({ post }) => {
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
