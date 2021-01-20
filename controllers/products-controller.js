const { request } = require("../app");

const myProductsList = async (req, res, next) => {
    // get my product lists

    const mobileno = req.headers.mobileno;
    let sql = `SELECT * from products where mobile=${mobileno}`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "products lists retrieved successfully"
        })
    })
};

const bachatgatProduct = async (req, res, next) => {
    // get my bachatgatProduct lists
    let sql = `select * from bachatgat`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Bachatgat lists retrieved successfully"
        })
    })
};

const kvkProducts = async (req, res, next) => {
    // get my kvkProducts lists
    let sql = `select * from kvk_product`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "kvkProducts lists retrieved successfully"
        })
    })
};

const selectCategory = async (req, res, next) => {
    // get my kvkProducts lists
    let sql = `select distinct(type) from category`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "product Category list successfully"
        })
    })
};

const selectProductCat = async (req, res, next) => {
    // get my category lists
    const productType = request.body.productType;
    if (productType) {
        let sql = `select cat from category where type=${productType}`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            res.json({
                status: 200,
                data,
                message: "product Category list successfully"
            })
        })
    } else {
        res.status(200).json({ message: "Please select product type" })
    }
};

const selectProductVariety = async (req, res, next) => {
    // get my variety lists
    const productType = request.body.productType;
    if (productType) {
        let sql = `select variety from category where type=${productType}`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            res.json({
                status: 200,
                data,
                message: "product variety list successfully"
            })
        })
    } else {
        res.status(200).json({ message: "Please select product type" })
    }
};

const addProducts = async (req, res, next) => {
    const product_cat = req.body.product_cat;
    const product_name = req.body.product_name;
    const product_desc = req.body.product_desc;
    const product_rate = req.body.product_rate;
    const itemName = req.body.itemName; //image upload here
    const path = "";
    const addDate = new Date();
    const user_id = req.body.user_id;
    const mobileno = req.body.mobileno;
    const fname = req.body.fname;
    const status = "0";
    const category = req.body.category;
    const variety = req.body.variety;
    const district = req.body.district;

    // get my add products lists

    let sql = "insert into products(product_cat, product_name, product_desc, product_rate, path, date, user_id, mobile, seller_name, status, category, variety, district) VALUES ?";
    var values = [
        [product_cat, product_name, product_desc, product_rate, path, addDate, user_id, mobileno, fname, status, category, variety, district]
    ];

    db.query(sql, [values], function (err, result) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "recored added successfully"
        })
    })
};

module.exports = {
    myProductsList,
    bachatgatProduct,
    kvkProducts,
    selectCategory,
    selectProductCat,
    selectProductVariety,
    addProducts
}
