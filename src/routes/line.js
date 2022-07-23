const express = require('express');

const router = express.Router();
const rdf = require('../modules/rdf.js');
const solidFiles = require('../modules/solidFiles.js');

router.get('/', async (req, res) => {
    console.log("Route : / Line");
    res.send("Route : / Line");
});

router.post('/lines', async (req, res) => {
    // TODO: La liste de toutes les lignes  
    console.log("Route : / All Lines");
    res.send("Route : / All Lines");
});

router.post('/add', async (req, res) => {
    // TODO: Ajouter une ligne 
    console.log("Route : / Add line");
    res.send("Route : / Add line");
});

module.exports = router;