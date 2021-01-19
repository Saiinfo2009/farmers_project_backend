const myProductsList = async (req, res, next) => {
    // get my product list lists
    console.log(req.body);
    const mobileno = req.body.mobileno;
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

exports.myProductsList = myProductsList;

