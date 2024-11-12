// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Hash this in production!
    email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('User', userSchema);
