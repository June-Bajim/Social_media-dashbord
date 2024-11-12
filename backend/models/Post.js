// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likes: { type: Number, default: 0 },
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
