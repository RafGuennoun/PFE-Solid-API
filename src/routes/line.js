const express = require('express');

const router = express.Router();
const bus = require('../modules/busData.js');
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
    console.log("Route : / Add line");
    const result = await bus.lineTTLFile(req.body);
    console.log(result);
    res.send(result);
});

module.exports = router;