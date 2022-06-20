const express = require('express');

const router = express.Router();
const auth = require('../modules/auth.js');
const solidFiles = require('../modules/solidFiles.js');

router.get('/', async (req, res) => {
    console.log("Route : /getLocation");
    res.send("Route : /getLocation")
});

router.post('/', async (req, res) => {

    // Part 1 : Login

    const loginBody = {
        "idp" : req.body.idp,
        "username" : req.body.username,
        "password" : req.body.password
    }

    let card = await auth.loginToPOD(loginBody);
    
    console.log(`clg WebID from route = ${card}`);
    const webID = card.replace('/profile/card#me','');

    const loginResult = {
        "login" : true,
        "idp" : req.body.idp, 
        "username" : req.body.username, 
        "webID" : webID
    };

    console.log(`Login result : \n ${loginResult}`);

    // Part 2 : Read File

    const readFileBody = {
        "webId" : webID,
        "folder" : req.body.folder,
        "file" : req.body.file
    };

    let content = await solidFiles.readFile(readFileBody);

    console.log("content : ");
    console.log(content);

    // Part 3 : sending content
    res.send(content);
});

module.exports = router;