const express = require('express');

const router = express.Router();
const files = require('../modules/files.js');

router.get('/', async (req, res) => {
    console.log("Route : /Test");
    res.send("Route : /Test");
});

router.post('/crea', async (req, res) => {

    const content = await files.createFile(req.body);
    console.log(content);
    res.send(content);
});

module.exports = router;