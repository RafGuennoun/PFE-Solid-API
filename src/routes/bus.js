const express = require('express');

const router = express.Router();
const rdf = require('../modules/rdf.js');
const solidFiles = require('../modules/solidFiles.js');

router.get('/', async (req, res) => {
    console.log("Route : /Bus");
    res.send("Route : /Bus");
});


router.get('/buses', async (req, res) => {
    //  TODO: liste de tout les buses du directory
    console.log("Route : / All Buses from the diredctory");
    res.send("Route : / All Buses from the diredctory");
});


router.post('/get', async (req, res) => {
    //  TODO: les infos d'un seul bus avec le web id
    console.log("Route : / Bus data");
    res.send("Route : / Bus data");
});

router.post('/add', async (req, res) => {
    //  TODO: Ajouter un bus au directort
    console.log("Route : / Add Bus data");
    res.send("Route : / Add Bus data");
});

router.post('/update', async (req, res) => {
    //  TODO: Modifer les infos d'un bus
    console.log("Route : / Add Bus data");
    res.send("Route : / Add Bus data");
});

router.post('/delete', async (req, res) => {
    //  TODO: Supprimer un bus du directory 
    console.log("Route : / Delete bus");
    res.send("Route : / Delete bus");
});

router.post('/line', async (req, res) => {
    //  TODO: Recuperer la ligne d'un bus 
    console.log("Route : / Get bus line");
    res.send("Route : / Get bus line");
});


module.exports = router;