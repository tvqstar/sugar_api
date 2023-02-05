const express = require('express');
const router = express.Router();
const productController = require('../controller/ProductController');

router.post('/add-product', productController.createProduct);
router.get('/all-product', productController.getAllProduct);

module.exports = router;
