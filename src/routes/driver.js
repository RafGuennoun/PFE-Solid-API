const express = require('express');

const router = express.Router();
const rdf = require('../modules/rdf.js');
const solidFiles = require('../modules/solidFiles.js');

router.get('/', async (req, res) => {
    console.log("Route : /Driver");
    const infos = {
        "webId" : "https://grafik.solidcommunity.net",
        "folder" : "public/PFE",
        "file" : "driver.ttl"
    };

    const content = await solidFiles.readFile(infos);
    console.log(content);

    const driver = {
        "nom" : content["foaf:nom"],
        "prenom" : content["foaf:prenom"],
        "dateNaiss" : content["foaf:dateNaiss"],
        "id" : content["foaf:id"]
    }
    
    res.send(driver);
});

router.post('/', async (req, res) => {

    console.log("Create/Update driver TTL ");
    const result = await rdf.driverTTL(req.body);
    res.send(result);

});

module.exports = router;