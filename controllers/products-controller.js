const moment = require('moment');

const myProductsList = async (req, res, next) => {
    // get my product lists
    const mobileno = req.headers.mobileno;
    let sql = `SELECT * from products where mobile=${mobileno}`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;

        for (let i in data) {
            if (data[i].status == 0) {
                data[i].status = "Pending for approval.";
            } else {
                data[i].status = "Approved";
            }
        }
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

const bhajipalaProducts = async (req, res, next) => {
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
    const productType = req.body.producttype;
    if (productType) {
        let sql = `select cat from category where type='${productType}'`;
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
    const catType = req.body.cattype;
    if (catType) {
        let sql = `select variety from category where cat='${catType}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            res.json({
                status: 200,
                data,
                message: "product variety list successfully"
            })
        })
    } else {
        res.status(200).json({ message: "Please select product category" })
    }
};

const serachProduct = async (req, res, next) => {
    // get product search lists. types: all, crop, animal, plant, vegitable
    const searchproduct = req.body.searchproduct;
    if (searchproduct) {
        let sql = "";
        if (searchproduct === "all") {
            sql = `SELECT * from products where status='1'`;
        } else {
            sql = `SELECT * from products where product_cat='${searchproduct}' AND status='1'`;
        }

        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            res.json({
                status: 200,
                data,
                message: "product list successfully"
            })
        })
    } else {
        res.status(200).json({ message: "Please select search product category" })
    }
}

const addProducts = async (req, res, next) => {
    const mobileno = req.headers.mobileno;
    if (!mobileno) {
        return res.json({
            status: 422,
            message: "Invalide request"
        })
    } else if (!req.body.select_category) {
        return res.json({
            status: 422,
            message: "Please select category"
        })
    } else if (!req.body.select_product) {
        return res.json({
            status: 422,
            message: "Please select product"
        })
    } else if (!req.body.select_variety) {
        return res.json({
            status: 422,
            message: "Please select variety"
        })
    } else if (!req.body.quantity) {
        return res.json({
            status: 422,
            message: "Please enter quantity"
        })
    } else if (!req.body.product_desc) {
        return res.json({
            status: 422,
            message: "Please enter product description"
        })
    } else if (!req.body.product_rate) {
        return res.json({
            status: 422,
            message: "Please enter product rate amount"
        })
    }

    let farmersql = `SELECT * from farmer_registration where mob_no='${mobileno}' AND status=1`;
    console.log(farmersql)
    db.query(farmersql, function (err, data, fields) {
        if (err) throw err;

        let farmerName = "";
        let user_id = "";
        let district = "";

        if (data.length > 0) {
            farmerName = data[0].fname + " " + data[0].lname;
            user_id = data[0].user_id;
            district = data[0].city1;

            let path = "";
            //image upload code
            // 'image' is the name of our file input field in the HTML form
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
            if (req.fileValidationError) {
                return res.send(req.fileValidationError);
            } else if (req.files.length > 0) {
                path = req.files[0].filename; //img name
            }

            const product_cat = req.body.select_category || "";
            const category = req.body.select_product || "";
            const variety = req.body.select_variety || "";
            const quantity = req.body.quantity || ""; //is refer as qty
            const product_desc = req.body.product_desc || "";
            const product_rate = req.body.product_rate || "";
            const addDate = moment().format('DD-MM-yyyy HH:mm:ss');
            const status = "0";

            // get my add products lists
            let sql = "insert into products(product_cat, product_name, product_desc, product_rate, path, date, user_id, mobile, seller_name, status, category, variety, district) VALUES ?";
            var values = [
                [product_cat, quantity, product_desc, product_rate, path, addDate, user_id, mobileno, farmerName, status, category, variety, district]
            ];

            db.query(sql, [values], function (err, result) {
                if (err) throw err;
                console.log("Number of records inserted: " + result.affectedRows);
                res.json({
                    status: 200,
                    message: "recored added successfully"
                })
            })
        } else {
            res.json({
                status: 422,
                message: "Invalid user"
            })
        }
    })
};

module.exports = {
    myProductsList,
    bachatgatProduct,
    bhajipalaProducts,
    selectCategory,
    selectProductCat,
    selectProductVariety,
    serachProduct,
    addProducts
}
