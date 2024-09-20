// Import required modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Pool } = require('pg'); // PostgreSQL module
const crypto = require('crypto'); // For hashing passwords using MD5
const basicAuth = require('basic-auth');
const app = express();
const { exec } = require('child_process'); 

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});