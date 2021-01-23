const multer = require('multer');
const helpers = require('../helper');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("in middleware",req)
        cb(null, 'img');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        console.log("in middleware:",file)
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileUpload = multer({
    limits: 50000000,
    storage: storage,
    fileFilter: helpers.imageFilter
});

module.exports = fileUpload;

