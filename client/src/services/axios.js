// src/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Base URL for your backend
  timeout: 5000, // Optional: Set a timeout in ms
});

export default api;
