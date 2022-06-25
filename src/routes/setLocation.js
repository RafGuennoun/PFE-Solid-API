const express = require('express');

const router = express.Router();
const auth = require('../modules/auth.js');
const solidFiles = require('../modules/solidFiles.js');
const rdf = require('../modules/rdf.js');

router.get('/', async (req, res) => {
    console.log("Route : /setLocation");
    res.send("Route : /setLocation")
});


router.post('/', async (req, res) => {

    const path = await solidFiles.createFile(req.body);
    res.send('your file has been created on : ' + path);

});

router.get('/rdf', async (req, res) => {
    console.log("Route : /RDF");
    res.send("Route : /RDF")
});

router.post('/rdf', async (req, res) => {

    const result = await rdf.ttlFile(req.body);
    res.send(result);

});


module.exports = router;