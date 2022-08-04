const express = require('express');

const router = express.Router();
const directory = require('../modules/directory.js');


router.get('/', async (req, res) => {
    console.log("Route : /Account");
    res.send("Route : /Account");
});

router.post('/webId', async (req, res) => {
    //  ? Recuperer les web Id
    // ! working
    const content = await directory.getWebId(req.body)
    console.log(content);
    res.send(content);
});

module.exports = router;