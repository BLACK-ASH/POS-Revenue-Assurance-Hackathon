// server/routes/salesReport.js
const express = require('express');
const router = express.Router();

// Example route: Get sales report (you can replace with your actual logic)
router.get('/', (req, res) => {
  res.json({ message: 'Sales report data goes here' });
});

module.exports = router;
