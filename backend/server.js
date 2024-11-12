// server.js
const express = require('express');
const mongoose = require('mongoose'); // assuming MongoDB as the database
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
