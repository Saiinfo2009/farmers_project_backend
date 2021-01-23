const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user-controller');

router.post('/createuser', usersController.createFarmer);
router.get('/statedistrictdata', usersController.stateDistrictData);
router.post('/districtvillagedata', usersController.districtVillageData);

module.exports = router;