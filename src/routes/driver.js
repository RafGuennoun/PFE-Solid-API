const express = require('express');

const router = express.Router();
const rdf = require('../modules/rdf.js');
const solidFiles = require('../modules/solidFiles.js');

router.get('/', async (req, res) => {
    console.log("Route : /Driver");
    res.send("Route : /Driver");
});

router.get('/drivers', async (req, res) => {
    // TODO: Complete this 
    console.log("Route : / All Driver");
    res.send("Route : / All Driver");
});

router.post('/add', async (req, res) => {
    // TODO: Complete this 
    console.log("Route : / Get Driver");
    res.send("Route : / Get Driver");
});

router.post('/update', async (req, res) => {
    // TODO: Complete this 
    console.log("Route : / Update Driver");
    res.send("Route : / Update Driver");
});



module.exports = router;