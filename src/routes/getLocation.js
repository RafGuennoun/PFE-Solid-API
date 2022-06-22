const express = require('express');

const router = express.Router();
const auth = require('../modules/auth.js');
const solidFiles = require('../modules/solidFiles.js');

router.get('/', async (req, res) => {
    console.log("Route : /getLocation");
    res.send("Route : /getLocation")
});

router.post('/', async (req, res) => {

    let content = await solidFiles.readFile(req.body);

    console.log("content : ");
    console.log(content);

    res.send(content);

});

module.exports = router;