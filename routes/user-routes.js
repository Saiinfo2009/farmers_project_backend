const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user-controller');

//router.post('/create', usersController.registerUser);
router.get('/user', usersController.registerUser);

module.exports = router;