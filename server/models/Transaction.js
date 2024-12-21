// models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  storeCode: {
    type: String,
    required: true
  },
  storeDisplayName: {
    type: String,
    required: true
  },
  transDate: {
    type: Date,
    required: true
  },
  transTime: {
    type: String,
    required: true
  },
  transNo: {
    type: String,
    required: true
  },
  tillNo: {
    type: String,
    required: true
  },
  discountHeader: {
    type: Number,
    default: 0
  },
  taxHeader: {
    type: Number,
    default: 0
  },
  netSalesHeaderValues: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  transType: {
    type: String,
    required: true
  },
  idKey: {
    type: String,
    required: true
  },
  tender: {
    type: String,
    required: true
  },
  dmLoadDate: {
    type: Date,
    required: true
  },
  dmLoadDeltaId: {
    type: String,
    required: true
  }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
