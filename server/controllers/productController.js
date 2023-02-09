const conn = require("../dbConnection")

exports.getAllProducts = (req, res, next) => {
    conn.query('SELECT * FROM user', (rr, data) => {
        if(err) return next('App Error');
        res.status(200).json({
            length: data?.length,
            data
        })

    })
}