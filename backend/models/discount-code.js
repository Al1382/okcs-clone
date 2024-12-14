const mongoose = require('mongoose')

const discountCodeSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  amount: { type: Number },
  brand: { type: String },
  brandEN: { type: String },

})

module.exports = mongoose.model('discountCodes', discountCodeSchema);
