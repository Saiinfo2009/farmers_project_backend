const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products-controller');

router.get('/myproductlist', productsController.myProductsList);
router.get('/bachatgatProduct', productsController.bachatgatProduct);
router.get('/kvkproducts', productsController.kvkProducts);
router.get('/selectcategory', productsController.selectCategory);
router.get('/selectproductCat', productsController.selectProductCat);
router.get('/selectproductVariety', productsController.selectProductVariety);

module.exports = router;