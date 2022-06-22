const express = require('express');

const router = express.Router();
const auth = require('../modules/auth.js');
const solidFiles = require('../modules/solidFiles.js');

router.get('/', async (req, res) => {
    console.log("Route : /setLocation");
    res.send("Route : /setLocation")
});


router.post('/', async (req, res) => {

    const path = await solidFiles.createFile(req.body);
    res.send('your file has been created on : ' + path);

});



module.exports = router;