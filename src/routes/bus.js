const express = require('express');

const router = express.Router();
const bus = require('../controllers/busData.js');
const directory = require('../controllers/directory.js');
const solidFiles = require('../controllers/solidFiles.js');


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
    //  ?: les infos d'un seul bus avec le web id
    // ! working
    console.log("Route : / Bus data");
    const infos = {
        "webId" : req.body.webId,
        "folder" : "public/PFE",
        "file" : "bus.ttl",
    }

    const content = await solidFiles.readFile(infos);

    const result = {
        "nom": content["foaf:nom"],
        "marque": content["foaf:marque"],
        "matricule": content["foaf:matricule"]
    }

    res.send(result);
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
    console.log(result);
    res.send(result);
});

router.post('/delete', async (req, res) => {
    //  TODO: Supprimer un bus du directory 
    console.log("Route : / Delete bus");
    res.send("Route : / Delete bus");
});

router.post('/line', async (req, res) => {
    //  ? Recuperer la ligne d'un bus 
    console.log("Route : / Get bus line");

    const infos = {
        "webId" : req.body.webId,
        "folder" : "public/PFE",
        "file" : "line.ttl",
    }

    const content = await solidFiles.readFile(infos);

    const result = {
        "name": content["foaf:name"],
        "id": content["foaf:id"],
        "network": content["foaf:network"],
        "from": content["foaf:from"],
        "to": content["foaf:to"]
    }

    res.send(result);
});


module.exports = router;