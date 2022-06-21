const express = require('express');

const router = express.Router();
const auth = require('../modules/auth.js');
const solidFiles = require('../modules/solidFiles.js');

router.get('/', async (req, res) => {
    console.log("Route : /setLocation");
    res.send("Route : /setLocation")
});


router.post('/', async (req, res) => {

    // Part 1 : Login

    // const loginBody = {
    //     "idp" : req.body.idp,
    //     "username" : req.body.username,
    //     "password" : req.body.password
    // }

    // let card = await auth.loginToPOD(loginBody);
    
    // console.log(`clg WebID from route = ${card}`);
    // const webID = card.replace('/profile/card#me','');

    // const loginResult = {
    //     "login" : true,
    //     "idp" : req.body.idp, 
    //     "username" : req.body.username, 
    //     "webID" : webID
    // };

    // console.log(`Login result : \n ${loginResult}`);

    // Part 2 : write in File

    // const writeFileBody = {
    //     "webId" : webID,
    //     "folder" : req.body.folder,
    //     "file" : req.body.file,
    //     "fileData" : req.body.fileData
    // };

    const path = await solidFiles.createFile(req.body);
    res.send('your file has been created on : ' + path);



   

    // const writeFileBody = {
    //     "webId" : "https://grafik.solidcommunity.net",
    //     "folder" : "private",
    //     "file" : "raf",
    //     "fileType" : "text",
    //     "fileData" : "Hello from the other side"
    // };

    // solidFiles.createFile(writeFileBody);

    // console.log(`file created normalement`);

    // // Part 3 : Logout

    // let logout = await auth.logout();
    // console.log(logout); 

    // // Part 4 : sending response

    // const result = {
    //     // "isCreated" : isFileCreated,
    //     "file" : "raf.txt",
    //     "fileData" : "hello awinnath"
    // }
    // res.send(result);
});



module.exports = router;