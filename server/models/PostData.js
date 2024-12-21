const mongoose = require('mongoose');

const posDataSchema = new mongoose.Schema({
  transactionId: { type: String, required: true },
  retailerId: { type: String, required: true },
  salesAmount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  itemsSold: [{
    itemId: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  }]
});

module.exports = mongoose.model('PosData', posDataSchema);
