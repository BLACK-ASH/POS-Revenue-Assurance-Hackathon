// routes/transaction.js
const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Add new transaction
router.post('/add', async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.status(201).json({ message: 'Transaction added successfully' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to add transaction' });
  }
});

router.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching transactions' });
  }
});

// Get transactions by store code
router.get('/store/:storeCode', async (req, res) => {
  try {
    const transactions = await Transaction.find({ storeCode: req.params.storeCode });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch transactions for this store' });
  }
});

// Get transaction by ID
router.get('/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch transaction' });
  }
});

module.exports = router;
