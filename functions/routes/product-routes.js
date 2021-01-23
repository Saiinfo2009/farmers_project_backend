const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products-controller');

router.get('/myproductlist', productsController.myProductsList);
router.get('/bachatgatProduct', productsController.bachatgatProduct);
router.get('/kvkproducts', productsController.bhajipalaProducts);
router.get('/bhajipalaproducts', productsController.selectCategory);
router.post('/selectproductCat', productsController.selectProductCat);
router.post('/selectproductVariety', productsController.selectProductVariety);
router.post('/serachproduct', productsController.serachProduct);
router.post('/addProducts', productsController.addProducts);

module.exports = router;