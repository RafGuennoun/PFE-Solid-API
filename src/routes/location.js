const express = require('express');

const router = express.Router();
const rdf = require('../modules/rdf.js');
const solidFiles = require('../modules/solidFiles.js');

router.get('/', async (req, res) => {
    console.log("Route : /Location");
    res.send("Route : /Location");
});

router.post('/get', async (req, res) => {
    // TODO: Complete this
    console.log("Route : / get Location");
    res.send("Route : / get Location");
});

router.post('/set', async (req, res) => {
    // TODO: Complete this
    console.log("Route : / set Location");
    res.send("Route : / set Location");
});

module.exports = router;