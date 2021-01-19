const express = require('express');
const body_parser = require('body-parser');
const mysql = require('mysql');
const userRoutes = require('./routes/user-routes');
const productRoutes = require('./routes/product-routes');

const app = express();

app.use(body_parser.json())

app.use('/api/user/', userRoutes)
app.use('/api/product/', productRoutes)

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