const express = require('express');
const mysql = require('mysql');
const userRoutes = require('./routes/user-routes');
const productRoutes = require('./routes/product-routes');
const adviceRoutes = require('./routes/advice-routes');
const fileUpload = require('./middleware/file-upload');

const app = express();
const path = require('path');

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//file upload code
app.use(fileUpload.array('image', 1));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.use('/api/user/', userRoutes);
app.use('/api/product/', productRoutes);
app.use('/api/advice/', adviceRoutes);

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'elearnin_myshopee_pyramid'
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected to database");
    app.listen('5000')
})

module.exports = app;