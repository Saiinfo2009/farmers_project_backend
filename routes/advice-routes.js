const express = require('express');
const router = express.Router();
const adviceController = require('../controllers/advice-controller');
const fileUpload = require('../middleware/file-upload')

router.post('/myadvicelist', adviceController.myAdviceList);
router.post('/discussionforum', adviceController.discussionForum);
//router.post('/askadvice', adviceController.askAdvice);

router.post('/askadvice', fileUpload.single('file'), adviceController.askAdvice)

module.exports = router;