// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB
connectDB()

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Import routes
const transactionRoutes = require('./routes/transaction');
const authRoutes = require('./routes/auth');
const salesRoutes = require('./routes/salesReport');

// Use routes
app.use('/api/transactions', transactionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/reports', salesRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
