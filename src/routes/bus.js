const express = require('express');

const router = express.Router();
const bus = require('../modules/busData.js');
const directory = require('../modules/directory.js');
const solidFiles = require('../modules/solidFiles.js');


router.get('/', async (req, res) => {
    console.log("Route : /Bus");
    res.send("Route : /Bus");
});

router.get('/buses', async (req, res) => {
    //  ? liste de tout les buses du directory
    // ! working
    const content = await directory.getBuses();
    console.log(content);
    res.send(content);
});

router.post('/init', async (req, res) => {
    // ? initialiser les fichiers ttls des bus
    // ! working
    console.log("Route : / init Bus");
    const result = await bus.initTTLFiles(req.body);
    console.log(result);
    res.send(result);
});

router.post('/get', async (req, res) => {
    //  TODO: les infos d'un seul bus avec le web id
    console.log("Route : / Bus data");
    res.send("Route : / Bus data");
});

router.post('/add', async (req, res) => {
    // ? Ajouter un bus au directory
    // ! working 70%
    console.log("Route : / add Bus directory");
    const result = await directory.addBus(req.body);
    console.log(result);
    res.send(result);
});

router.post('/update', async (req, res) => {
    // ? Modifer les infos d'un bus
    // ! working
    console.log("Route : / Add Bus data");
    const result = await bus.busTTLFile(req.body);
    console.log(res);
    res.send(result);
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