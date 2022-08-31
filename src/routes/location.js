const express = require('express');

const router = express.Router();
const solidFiles = require('../controllers/solidFiles.js');
const bus = require('../controllers/busData.js');

router.get('/', async (req, res) => {
    console.log("Route : /Location");
    res.send("Route : /Location");
});

router.post('/get', async (req, res) => {
    // ? Recuperer la localisation d'un bus
    // ! working
    console.log("Route : / get Location");
    const infos = {
        "webId" : req.body.webId,
        "folder" : "public/PFE",
        "file" : "location.ttl",
    }

    const content = await solidFiles.readFile(infos);

    const result = {
        "lat": content["geo:lat"],
        "lon": content["geo:lon"],
        "track": content["geo:lon"],
    } 

    res.send(result);
});

router.post('/set', async (req, res) => {
    // ? Modifier la localisation d'un bus
    // ! working
    console.log("Route : / set Location");
    const result = await bus.locationTTLFile(req.body);
    res.send(result);
});

module.exports = router;