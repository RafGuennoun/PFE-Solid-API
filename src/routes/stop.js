const express = require('express');

const router = express.Router();
const rdf = require('../controllers/rdf.js');
const solidFiles = require('../controllers/solidFiles.js');

router.get('/', async (req, res) => {
    console.log("Route : / Stop");
    res.send("Route : / Stop");
});

router.post('/stops', async (req, res) => {
    // TODO: La liste de tout les arrets d'une ligne 
    console.log("Route : / All stops");
    res.send("Route : / All stops");
});

router.post('/bus', async (req, res) => {
    // TODO: La liste de tout les arrets d'un bus 
    console.log("Route : / bus stops");
    res.send("Route : / bus stops");
});

router.post('/terminus', async (req, res) => {
    // TODO: les arrets terminus d'un bus 
    console.log("Route : / terminus stops");
    res.send("Route : / terminus stops");
});

router.post('/add', async (req, res) => {
    // TODO: Ajouter un arret au bus  
    console.log("Route : / Add stop");
    res.send("Route : / Add stop");
});

router.post('/remove', async (req, res) => {
    // TODO: Enlever un arret au bus  
    console.log("Route : / Remove stop");
    res.send("Route : / Remove stop");
});

module.exports = router;