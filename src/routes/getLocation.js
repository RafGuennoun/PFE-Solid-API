const express = require('express');

const router = express.Router();
const auth = require('../modules/auth.js');

router.get('/', async (req, res) => {
    console.log("Route : /getLocation");
    res.send("Route : /getLocation")
});

router.post('/', async (req, res) => {

    let webID = await auth.loginToPOD(req.body);
    
    console.log(`clg WebID from route = ${webID}`);
    let result = {
        "login" : true,
        "idp" : req.body.idp, 
        "username" : req.body.username, 
        "webID" : webID.replace('/profile/card#me','')    
    };

    res.send(result);
});

module.exports = router;