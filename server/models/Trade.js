// models/Trade.js
const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  userId: String
});

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;