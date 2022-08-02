const express = require('express');

const router = express.Router();
const bus = require('../modules/busData.js');
const solidFiles = require('../modules/solidFiles.js');
const directory = require('../modules/directory.js');

router.get('/', async (req, res) => {
    console.log("Route : / Line");
    res.send("Route : / Line");
});

router.get('/lines', async (req, res) => {
    //  ? liste de toutes les lignes du directory
    // ! working
    console.log("Route : / All Lines");
    const content = await directory.getLines();
    console.log(content);
    res.send(content);
});

router.post('/get', async (req, res) => {
    // ? Recuperer la ligne d'un bus 
    // ! working
    console.log("Route : / get line");
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

router.post('/add', async (req, res) => {
    // ? Ajouter une ligne pour un bus 
    // ! working
    console.log("Route : / Add line to bus");
    const result = await bus.lineTTLFile(req.body);
    console.log(result);
    res.send(result);
});

router.post('/add_directory', async (req, res) => {
    // ? Ajouter une ligne dans le directory
    // ! working
    console.log("Route : / Add line to directory");
    const result = await directory.addLine(req.body);
    console.log(result);
    res.send(result);
});

module.exports = router; 