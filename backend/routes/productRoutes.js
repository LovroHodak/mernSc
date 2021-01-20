const express = require('express')
const router = express.Router()
const {
    getAllProducts,
    getProductById
} = require('../controller/productControllers')

//-desc = get all products from DB
//-route = GET /api/products
router.get('/', getAllProducts)


//-desc = get a product from DB
//-route = GET /api/products/:id
router.get('/:id', getProductById)

module.exports = router


