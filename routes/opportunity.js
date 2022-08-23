const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', (req, res) =>{
        //TODO: Authorize "is user signed in? NO -> route to login"

        let oppList = [//TEMP: hardcoded values to be replaced
            {id: 11, organization: 'OceanSyde', desc: 'beach cleanup', dateCreated:'08/20/2022', date: '12/1/2023'},
            {id: 22, organization: 'Everhills', desc: 'homeless shelter', dateCreated:'08/14/2022', date: '12/5/2023'},
            {id: 33, organization: 'VMSC', desc: 'foodline service', dateCreated:'08/20/2021', date: '12/22/2023'},
        ]
        res.render('opportunity', {oppList: oppList});
    });
    return router;
};