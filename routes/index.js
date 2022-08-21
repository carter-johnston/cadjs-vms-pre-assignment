const express = require('express');
const router = express.Router();

const loginRoute = require('./login');
const volunteerRoute = require('./volunteer');
const opportunityRoute = require('./opportunity');

module.exports = () => {
    router.get('/', (req, res) =>{
        if(!req.session.user){
            return res.redirect('/login');
        }
        return res.render('admin');
    });

    router.use('/login', loginRoute());
    router.use('/volunteer', volunteerRoute());
    router.use('/opportunity', opportunityRoute());
    return router;
};



