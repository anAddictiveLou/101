const express = require('express');
const router = express.Router();

let posts = [];

// Get all posts
router.get('/', (req, res) => {
    res.json(posts);
});

// Create a new post
router.post('/', (req, res) => {
    const newPost = { id: posts.length + 1, title: req.body.title, content: req.body.content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

module.exports = router;

