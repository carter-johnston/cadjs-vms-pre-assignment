const express = require('express');
var parseUrl = require('body-parser')
const router = express.Router();

let encodeUrl = parseUrl.urlencoded({ extended: false })

module.exports = () => {
    router.get('/', (req, res) => {
        if(req.session.user){
            console.log("User has logged out.")
            req.session.user = false;
        }
        return res.render('login');
    });

    router.post('/', encodeUrl, (req, res) => {
        console.log(`${req.body.username} has logged in.`);
        req.session.user = true;
        return res.redirect('../');
    });
    return router;
};
