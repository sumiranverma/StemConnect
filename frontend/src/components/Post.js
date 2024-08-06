// src/components/Post.js
import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>By {post.author}</small>
    </div>
  );
};

export default Post;
