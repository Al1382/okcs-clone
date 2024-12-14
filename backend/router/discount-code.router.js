const router = require('express').Router();
const DiscountCodeModel = require('../models/discount-code')
const ProductModel = require('../models/product')

/*  
body : {
  code : string,
  productId : string
}
*/
router.post('/en', async (req, res) => {
  const body = req.body
  const discountCode = await DiscountCodeModel.findOne({
    code: body.code
  })
  const product = await ProductModel
    .findOne({ id: body.productId })
    .select('id descriptionEN nameEN categoryEN brandEN price image discountprice discount')

  if (discountCode.brandEN != product.brandEN) {
    return res.status(400).json("this discount code is not valid for this brand!")
  }

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
  const discountAmount = (data.price * discountCode.amount) / 100
  data.discountprice -= discountAmount
  data.discount = +(100 - ((data.discountprice / data.price) * 100)).toFixed()
  res.status(200).json(data)
})


/*  
body : {
  code : string,
  productId : string
}
*/
router.post('/fa', async (req, res) => {
  const body = req.body

  const discountCode = await DiscountCodeModel.findOne({
    code: body.code
  })
  const product = await ProductModel
    .findOne({ id: body.productId })
    .select('id description name category brand price image discountprice discount')


  if (discountCode.brand !== product.brand) {
    return res.status(400).json("این کد تخفیف برای این برند تا معتبر است")
  }

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
  const discountAmount = (data.price * discountCode.amount) / 100
  data.discountprice -= discountAmount
  data.discount = +(100 - ((data.discountprice / data.price) * 100)).toFixed()
  res.status(200).json(data)

})

module.exports = router;

