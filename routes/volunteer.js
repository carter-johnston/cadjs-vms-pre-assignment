const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', (req, res) =>{
        //TODO: Authorize "is user signed in? NO -> route to login"
        res.render('volunteer');
    });

    router.get('/:shortname', (req, res) => {
        return res.send(`${req.params.shortname} selected`)
    })

    return router;
};
