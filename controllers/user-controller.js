
const moment = require('moment');

const createFarmer = async (req, res, next) => {
    // create farmer registration
    if (req.body.fname && req.body.lname && req.body.email_id && req.body.mobileno
        && req.body.pincode && req.body.city && req.body.state && req.body.city1 && req.body.village) {

        const fname = req.body.fname || "";
        const lname = req.body.lname || "";
        const email_id = req.body.email_id || "";
        const mob_no = req.body.mobileno || "";
        const pincode = req.body.pincode || "";
        const pass = req.body.pass || "";
        const date = moment().format('DD-MM-yyyy HH:mm:ss');
        const city = req.body.city || "";
        const status = "1";
        const state = req.body.state || "";
        const city1 = req.body.city1 || "";
        const village = req.body.village || "";

        if (mob_no) {
            let sql = `INSERT INTO farmer_registration (fname, lname, email_id, mob_no, pincode, pass, city, date, status, state, city1, vilage) VALUES ('${fname}', '${lname}', '${email_id}', '${mob_no}', '${pincode}', '${pass}', '${city}', '${date}', '${status}', '${state}', '${city1}', '${village}')`;
            db.query(sql, function (err, result) {
                if (err) throw err;
                res.status(200).json({ status: 200, message: "User register successfully" })
            });
        } else {
            res.status(422).json({ status: 422, message: "Mobile number is required" })
        }
    } else {
        return res.json({
            status: 422,
            message: "All fields are mandatory"
        })
    }
};

const stateDistrictData = async (req, res, next) => {
    // get State and district list
    let sql = `select * from india`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "State and district list fetch successfully"
        })
    })
};

const districtVillageData = async (req, res, next) => {
    // get State and district list
    if (req.body.district) {
        const district = req.body.district;
        let sql = `select * from india where district='${district}'`;
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            res.json({
                status: 200,
                data,
                message: "State and district list fetch successfully"
            })
        })
    } else {
        res.json({
            status: 200,
            message: "Please selct the district"
        })
    }
};

module.exports = {
    createFarmer,
    stateDistrictData,
    districtVillageData
}