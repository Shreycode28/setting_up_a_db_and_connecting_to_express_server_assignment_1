// Importing necessary packages
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // To use environment variables

const app = express();
const port = process.env.PORT || 3000; // Default to port 3000 if not provided

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error(`Error connecting to database: ${error.message}`);
  });

// Sample route for testing the backend
app.get('/', (req, res) => {
  res.send('Customer Management System Backend is running!');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
