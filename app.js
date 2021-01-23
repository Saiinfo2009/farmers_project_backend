const express = require('express');
const mysql = require('mysql');
const userRoutes = require('./routes/user-routes');
const productRoutes = require('./routes/product-routes');
const adviceRoutes = require('./routes/advice-routes');

const app = express();

// app.use(body_parser.json())
const multer = require('multer');
const upload = multer()

// for parsing application/json
app.use(express.json()); 

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.any()); 
app.use(express.static('img'));
// app.use(express.static(__dirname + '/img'));

// app.post('/api/upload', upload.single('file'), function (req, res, next) {
//     // req.files is array of `photos` files
//     // req.body will contain the text fields, if there were any
//     console.log(req.files);
//     console.log(req.body);
//   })

app.use('/api/user/', userRoutes)
app.use('/api/product/', productRoutes)
app.use('/api/advice/', adviceRoutes)

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'elearnin_myshopee_pyramid'
});

db.connect(function (err) {
    if(err) throw err;
    console.log("Connected to database");
    app.listen('5000')
})

module.exports = app;