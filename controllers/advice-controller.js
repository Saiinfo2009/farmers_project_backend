const moment = require('moment');

const myAdviceList = async (req, res, next) => {
    // get my advice lists
    const mobileno = req.headers.mobileno;
    const advicetype = req.body.advicetype;

    let sql = `SELECT * from advice_crop where user_id='${mobileno}' AND que_type ='${advicetype}'`;
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
            message: "advice lists retrieved successfully"
        })
    })
};

const discussionForum = async (req, res, next) => {
    // get discussion Forum lists
    // const mobileno = req.headers.mobileno;
    const advicetype = req.body.advicetype;

    let sql = `SELECT * from advice_crop where access='public' AND que_type ='${advicetype}'`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "advice forum retrieved successfully"
        })
    })
};

const askAdvice = async (req, res, next) => {
    console.log(req.body)
    console.log(req.files)
    // add ask Advice
    const mobileno = req.headers.mobileno;
    let img = "";
    //image upload code

    // 'image' is the name of our file input field in the HTML form
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any
    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    } else if (req.files.length == 0) {
        return res.send('Please select an image to upload');
    } else {
        img = req.files[0].filename; //img name
        console.log(req.files[0].path)
    }

    // Display uploaded image for user validation
    const advice_date = moment().format('DD-MM-yyyy HH:mm:ss');
    const que_type = req.body.que_type || "";
    const crop_name = req.body.crop_animal_name || "";
    const question = req.body.question || "";
    const farmer_name = req.body.farmer_name || "";
    const address = req.body.address || "";
    const ans = "";
    const counselor_name = "";
    const advice_status = "pending";
    const status = "1";
    const adate = "";
    const cdate = "";

    let sql = "insert into advice_crop(advice_date, user_id, crop_name, question, farmer_name, address, mobile_no, ans, counselor_name, advice_status, status, adate, cdate, img, que_type) VALUES ?";
    const values = [
        [advice_date, mobileno, crop_name, question, farmer_name, address, mobileno, ans, counselor_name, advice_status, status, adate, cdate, img, que_type]
    ];

    db.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        res.json({
            status: 200,
            message: "recored added successfully"
        })
    })
};

module.exports = {
    myAdviceList,
    discussionForum,
    askAdvice
}
