const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  month: { type: String, required: true },
  phone: { type: String, required: true },
  bank: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  amount: { type: Number, required: true },
  reference: { type: String, required: true },
  paymentDate: { type: Date, required: true }
});

module.exports = mongoose.model('Payment', paymentSchema);

