const express = require('express');

const router = express.Router();
const rdf = require('../modules/rdf.js');
const solidFiles = require('../modules/solidFiles.js');

router.get('/', async (req, res) => {
    console.log("Route : /bus");
    const infos = {
        "webId" : "https://grafik.solidcommunity.net",
        "folder" : "public/PFE",
        "file" : "bus.ttl"
    };

    const content = await solidFiles.readFile(infos);
    console.log(content);

    const bus = {
        "nom" : content["foaf:nom"],
        "marque" : content["foaf:marque"],
        "matricule" : content["foaf:matricule"]
    }

    res.send(bus);
});

router.post('/', async (req, res) => {

    console.log("Create/Update Bus TTL");
    const result = await rdf.busTTL(req.body);
    res.send(result);
});


router.get('/all', async (req, res) => {
    console.log("Route : /All");
    console.log("All bus details");

    const infosBus = {
        "webId" : "https://grafik.solidcommunity.net",
        "folder" : "public/PFE",
        "file" : "bus.ttl"
    };

    const contentBus = await solidFiles.readFile(infosBus);

    const bus = {
        "nom" : contentBus["foaf:nom"],
        "marque" : contentBus["foaf:marque"],
        "matricule" : contentBus["foaf:matricule"]
    }

    const infosDriver = {
        "webId" : "https://grafik.solidcommunity.net",
        "folder" : "public/PFE",
        "file" : "driver.ttl"
    };

    const contentDriver = await solidFiles.readFile(infosDriver);

    const driver = {
        "nom" : contentDriver["foaf:nom"],
        "prenom" : contentDriver["foaf:prenom"],
        "dateNaiss" : contentDriver["foaf:dateNaiss"],
        "id" : contentDriver["foaf:id"]
    }

    const infosLocation = {
        "webId" : "https://grafik.solidcommunity.net",
        "folder" : "public/PFE",
        "file" : "location.ttl"
    };

    const contentLocation = await solidFiles.readFile(infosLocation);

    const location = {
        "longitude" : contentLocation["foaf:longitude"],
        "latitude" : contentLocation["foaf:latitude"],
    }

    const allData = {
        "bus" : bus,
        "driver" : driver,
        "location" : location
    }

    res.send(allData);

});

module.exports = router;