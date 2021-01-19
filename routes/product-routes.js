const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products-controller');

router.post('/myproductlist', productsController.myProductsList);

module.exports = router;