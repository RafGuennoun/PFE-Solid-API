const express = require('express');

const router = express.Router();
const bus = require('../controllers/busData.js');
const solidFiles = require('../controllers/solidFiles.js');

router.get('/', async (req, res) => {
    console.log("Route : /Driver");
    res.send("Route : /Driver");
});

router.post('/get', async (req, res) => {
    // ?  Recupere les infos d'un chauffeur de bus
    // ! Working
    console.log("Route : / Get Driver");
    const infos = {
        "webId" : req.body.webId,
        "folder" : "public/PFE",
        "file" : "driver.ttl"
    }

    const content = await solidFiles.readFile(infos);

    const result = {
        "nom": content["foaf:nom"],
        "prenom": content["foaf:prenom"],
        "birthday": content["foaf:birthday"],
        "id": content["foaf:id"]
    }

    res.send(result);
});

router.post('/update', async (req, res) => {
    // ?  Modifer les infos d'un chauffeur de bus
    // ! Working
    console.log("Route : / Update Driver");
    const result = await bus.driverTTLFile(req.body);
    res.send(result);
});

module.exports = router;