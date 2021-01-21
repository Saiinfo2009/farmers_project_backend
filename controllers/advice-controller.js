const myAdviceList = async (req, res, next) => {
    // get my advice lists
    const mobileno = req.headers.mobileno;
    const advicetype = req.body.advicetype;

    let sql = `SELECT * from advice_crop where user_id='${mobileno}' AND que_type ='${advicetype}'`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "advice lists retrieved successfully"
        })
    })
};

const discussionForum = async (req, res, next) => {
    // get discussion Forum lists
    const mobileno = req.headers.mobileno;
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
    // add ask Advice
    const mobileno = req.headers.mobileno;
    const advicetype = req.body.advicetype;

    const advice_date = new Date();
    const advice_id = req.body.advice_id;
    const crop_name = req.body.crop_name;
    const question = req.body.question;
    const farmer_name = req.body.farmer_name;
    const address = req.body.address;
    const ans = "";
    const counselor_name = "";
    const advice_status = "pending";
    const status = "1";
    const adate = "";
    const cdate = "";
    const img = req.body.img; //upload image code
    const que_type = req.body.que_type;

    let sql = "insert into advice_crop(advice_date, user_id, advice_id, crop_name, question, farmer_name, address, mobile_no, ans, counselor_name, advice_status, status, adate, cdate, img, que_type) VALUES ?";
    const values = [
        [advice_date, mobileno, advice_id, crop_name, question, farmer_name, address, mobileno, ans, counselor_name, advice_status, status, adate, cdate, img, que_type]
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
    myAdviceList,
    discussionForum,
    askAdvice
}
