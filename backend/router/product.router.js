const router = require('express').Router();
const ProductModel = require('../models/product')

router.get('/en', async (req, res) => {
  const products = await ProductModel
    .find({})
    .select('id descriptionEN nameEN categoryEN brandEN price image discountprice discount')

  const mappedData = products.map(p => ({
    id: p.id,
    description: p.descriptionEN,
    name: p.nameEN,
    category: p.categoryEN,
    brand: p.brandEN,
    price: p.price,
    image: p.image,
    discountprice: p.discountprice,
    discount: p.discount,
  }))

  res.status(200).json(mappedData)
})

router.get('/en/products/:id', async (req, res) => {
  const product = await ProductModel
    .findOne({ id: req.params.id })
    .select('id descriptionEN nameEN categoryEN brandEN price image discountprice discount')

  const data = {
    id: product.id,
    description: product.descriptionEN,
    name: product.nameEN,
    category: product.categoryEN,
    brand: product.brandEN,
    price: product.price,
    image: product.image,
    discountprice: product.discountprice,
    discount: product.discount,
  }

  res.status(200).json(data)
})

router.get('/fa', async (req, res) => {
  const products = await ProductModel
    .find({})
    .select('id description name category brand price image discountprice discount')

  const mappedData = products.map(p => ({
    id: p.id,
    description: p.description,
    name: p.name,
    category: p.category,
    brand: p.brand,
    price: p.price,
    image: p.image,
    discountprice: p.discountprice,
    discount: p.discount,
  }))

  res.status(200).json(mappedData)
})

router.get('/fa/products/:id', async (req, res) => {
  const product = await ProductModel
    .findOne({ id: req.params.id })
    .select('id description name category brand price image discountprice discount')

  const data = {
    id: product.id,
    description: product.description,
    name: product.name,
    category: product.category,
    brand: product.brand,
    price: product.price,
    image: product.image,
    discountprice: product.discountprice,
    discount: product.discount,
  }

  res.status(200).json(data)
})

module.exports = router;
