import React from "react";

const SinglePost = ({ post, token, userId }) => {
  //console.log("userId in SinglePost:", userId);

  //console.log("params:", post, token, postId);

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
  return form;
};

export default SinglePost;
