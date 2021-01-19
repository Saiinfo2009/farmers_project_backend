const registerUser = async (req, res, next) => {
    res.status(200).json({ message: "Hello farmer. Welcome to registration!!!" })
};

// // get user lists
// router.get('/products', function(req, res) {
//     console.log(req.headers);
//     let sql = `SELECT * from products where mobile=7447889268`;
//     db.query(sql, function(err, data, fields) {
//       if (err) throw err;
//       res.json({
//         status: 200,
//         data,
//         message: "products lists retrieved successfully"
//       })
//     })
//   });

exports.registerUser = registerUser;