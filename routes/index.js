var ip = require("ip");
var appVersion = require('./version');

module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `players` ORDER BY id ASC"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Red Hat Demo App 입니다. | 멤버 보기",
                message: ip.address(),
                version: appVersion.version,
                players: result
            });
        });
    },
};
