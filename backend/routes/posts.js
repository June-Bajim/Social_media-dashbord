// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create a post
router.post('/', async (req, res) => {
    const post = new Post(req.body);
    try {
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'username');
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
