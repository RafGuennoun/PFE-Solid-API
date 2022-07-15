const express = require('express');

const router = express.Router();
const rdf = require('../modules/rdf.js');
const solidFiles = require('../modules/solidFiles.js');

router.get('/', async (req, res) => {
    
    console.log("Route : /Location");
    res.send("Route : /Location");
  
});

router.post('/get', async (req, res) => {

    const webId = req.body.webId;

    const infos = {
        "webId" : webId,
        "folder" : "public/PFE",
        "file" : "location.ttl"
    };

    const content = await solidFiles.readFile(infos);
    console.log(content);

    const location = {
        "longitude" : content["foaf:longitude"],
        "latitude" : content["foaf:latitude"],
    }

    res.send(location);

});

router.post('/set', async (req, res) => {

    console.log("Create/Update location TTL ");
    const result = await rdf.locationTTL(req.body);
    res.send(result);

});

module.exports = router;