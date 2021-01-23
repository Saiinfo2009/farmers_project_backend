const express = require('express');
const router = express.Router();
const adviceController = require('../controllers/advice-controller');

router.post('/myadvicelist', adviceController.myAdviceList);
router.post('/discussionforum', adviceController.discussionForum);
router.post('/askadvice', adviceController.askAdvice)

module.exports = router;