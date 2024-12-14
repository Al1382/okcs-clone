const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  id: { type: String, require: true, unique: true },
  description: { type: String },
  descriptionEN: { type: String },
  name: { type: String, require: true },
  nameEN: { type: String, require: true },
  category: { type: String },
  categoryEN: { type: String },
  brand: { type: String },
  brandEN: { type: String },
  price: { type: Number },
  image: { type: String },
  discountprice: { type: Number },
  discount: { type: Number },
})

module.exports = mongoose.model('products', productSchema);
