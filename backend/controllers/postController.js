// controllers/postController.js
const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { title, content, author } = req.body;

    try {
        const newPost = new Post({ title, content, author });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'Error creating post' });
    }
};