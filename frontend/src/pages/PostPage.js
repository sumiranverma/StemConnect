import React, { useState } from 'react';
import axios from 'axios';
import './PostPage.css';

const PostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/posts', { title, content, author });
      console.log(response.data);
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (error) {
      console.error('Error creating post', error);
    }
  };

  return (
    <div className="post-page">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Create & <span className="highlight">Educate</span> with us.</h2>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Price" />
          <input type="text" placeholder="Cover Image URL" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <textarea placeholder="Description" value={content} onChange={(e) => setContent(e.target.value)} required />
          <button type="submit">Create Program</button>
        </form>
      </div>
      <div className="image-container">
        <img src="https://plus.unsplash.com/premium_vector-1716988351762-fb15ff2505c5?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Creating Program" />
      </div>
    </div>
  );
};

export default PostPage;
