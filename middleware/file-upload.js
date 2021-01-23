const multer = require('multer');
const path = require('path');
const helpers = require('../helper');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'img');
    },
    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});

const fileUpload = multer({
    limits: 50000000,
    storage: storage,
    fileFilter: helpers.imageFilter
});

module.exports = fileUpload;

