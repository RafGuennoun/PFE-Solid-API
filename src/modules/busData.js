var exports = module.exports={};

const solidFiles = require('./solidFiles.js');
const rdfLib = require('rdflib');

// prefixes 
const RDF = rdfLib.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
const RDFS =  rdfLib.Namespace("http://www.w3.org/2000/01/rdf-schema#")
const FOAF = rdfLib.Namespace("http://xmlns.com/foaf/0.1/")
const XSD = rdfLib. Namespace("http://www.w3.org/2001/XMLSchema#")

// ? RDF for the bus, driver, location file 

// Bus Turtle File
exports.busTTLFile = async function (infos){
   
    const graph = rdfLib.graph();

    // File URI 
    const busDoc = rdfLib.sym(
        infos.webId + "/public/PFE/bus.ttl"
    );

    const userUri = rdfLib.sym(infos.webId +'/profile/card#me');

    const driverURI = rdfLib.sym(
        infos.webId + "/public/PFE/driver.ttl"
    );

    const locationURI = rdfLib.sym(
        infos.webId + "/public/PFE/location.ttl"
    );

    const lineURI = rdfLib.sym(
        infos.webId + "/public/PFE/line.ttl"
    );

    // add the doc to the graph
    graph.add(busDoc, RDF('type'), FOAF('Document'));
    graph.add(busDoc, RDF('maker'), userUri);

    graph.add(busDoc, FOAF('conducteur'), driverURI);
    graph.add(busDoc, FOAF('localisation'), locationURI);
    graph.add(busDoc, FOAF('line'), lineURI);
    graph.add(busDoc, FOAF('nom'), infos.bus.nom);
    graph.add(busDoc, FOAF('matricule'), infos.bus.matricule);
    graph.add(busDoc, FOAF('marque'), infos.bus.marque);
    
    const content = rdfLib.serialize(undefined, graph, 'bus.ttl', 'text/turtle');
    console.log("content :");
    console.log("-------------------------------------------------------------------------------------------------");
    console.log(content);
    console.log("-------------------------------------------------------------------------------------------------");

    const ttlFileData = { 
        "idp" : infos.login.idp,
        "username" : infos.login.username,
        "password" : infos.login.password,
        "folder" : "public/PFE",
        "file" : 'bus.ttl' ,
        "fileData" : content
    }

    solidFiles.createFile(ttlFileData);

    return ttlFileData;
}

// Driver Turtle File
exports.driverTTLFile = async function (infos){
   
    const graph = rdfLib.graph();

    // File URI 
    const driverDoc = rdfLib.sym(
        infos.webId + "/public/PFE/bus.ttl"
    );

    const userUri = rdfLib.sym(infos.webId +'/profile/card#me');

    // add the doc to the graph
    graph.add(driverDoc, RDF('type'), FOAF('Document'));
    graph.add(driverDoc, RDF('maker'), userUri);

    graph.add(driverDoc, FOAF('nom'), infos.driver.nom);
    graph.add(driverDoc, FOAF('prenom'), infos.driver.prenom);
    graph.add(driverDoc, FOAF('birthday'), infos.driver.birthday);
    graph.add(driverDoc, FOAF('id'), infos.driver.id);
    
    const content = rdfLib.serialize(undefined, graph, 'driver.ttl', 'text/turtle');
    console.log("content :");
    console.log("-------------------------------------------------------------------------------------------------");
    console.log(content);
    console.log("-------------------------------------------------------------------------------------------------");

    const ttlFileData = { 
        "idp" : infos.login.idp,
        "username" : infos.login.username,
        "password" : infos.login.password,
        "folder" : "public/PFE",
        "file" : 'driver.ttl' ,
        "fileData" : content
    }

    solidFiles.createFile(ttlFileData);

    return ttlFileData;
}

// Location Turtle File
exports.locationTTLFile = async function (infos){
   
    const graph = rdfLib.graph();

    // File URI 
    const locationDoc = rdfLib.sym(
        infos.webId + "/public/PFE/location.ttl"
    );

    const userUri = rdfLib.sym(infos.webId +'/profile/card#me');

    // add the doc to the graph
    graph.add(locationDoc, RDF('type'), FOAF('Document'));
    graph.add(locationDoc, RDF('maker'), userUri);

    graph.add(locationDoc, FOAF('lat'), infos.location.lat);
    graph.add(locationDoc, FOAF('lon'), infos.location.lon);

    
    const content = rdfLib.serialize(undefined, graph, 'location.ttl', 'text/turtle');
    console.log("content :");
    console.log("-------------------------------------------------------------------------------------------------");
    console.log(content);
    console.log("-------------------------------------------------------------------------------------------------");

    const ttlFileData = { 
        "idp" : infos.login.idp,
        "username" : infos.login.username,
        "password" : infos.login.password,
        "folder" : "public/PFE",
        "file" : 'location.ttl' ,
        "fileData" : content
    }

    solidFiles.createFile(ttlFileData);

    return ttlFileData;
}

// Line Turtle File
exports.lineTTLFile = async function (infos){
   
    const graph = rdfLib.graph();

    // File URI 
    const lineDoc = rdfLib.sym(
        infos.webId + "/public/PFE/line.ttl"
    );

    const userUri = rdfLib.sym(infos.webId +'/profile/card#me');

    // add the doc to the graph
    graph.add(lineDoc, RDF('type'), FOAF('Document'));
    graph.add(lineDoc, RDF('maker'), userUri);

    graph.add(lineDoc, FOAF('id'), infos.line.id);
    graph.add(lineDoc, FOAF('name'), infos.line.name);
    graph.add(lineDoc, FOAF('from'), infos.line.from);
    graph.add(lineDoc, FOAF('to'), infos.line.to);
    graph.add(lineDoc, FOAF('network'), infos.line.network);
    
    const content = rdfLib.serialize(undefined, graph, 'line.ttl', 'text/turtle');
    console.log("content :");
    console.log("-------------------------------------------------------------------------------------------------");
    console.log(content);
    console.log("-------------------------------------------------------------------------------------------------");

    const ttlFileData = { 
        "idp" : infos.login.idp,
        "username" : infos.login.username,
        "password" : infos.login.password,
        "folder" : "public/PFE",
        "file" : 'line.ttl' ,
        "fileData" : content
    }

    solidFiles.createFile(ttlFileData);

    return ttlFileData;
}

// init file
exports.initTTLFiles = async function(infos){
    const bus_infos = {
        "login" : infos.login,
        "webId" : infos.webId,
        "bus" : infos.bus,
    };

    const driver_infos = {
        "login" : infos.login,
        "webId" : infos.webId,
        "driver" : infos.driver,
    };

    const location_infos = {
        "login" : infos.login,
        "webId" : infos.webId,
        "location" : infos.location,
    };

    const line_infos = {
        "login" : infos.login,
        "webId" : infos.webId,
        "line" : infos.line,
    };

    const location = await this.locationTTLFile(location_infos);
    const driver = await this.driverTTLFile(driver_infos);
    const line = await this.lineTTLFile(line_infos);
    const bus = this.busTTLFile(bus_infos);

    const res = {
        "bus" : bus,
        "driver" : driver,
        "location" : location,
        "line" : line
    }

    return res;
}
