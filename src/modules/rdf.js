var exports = module.exports={};

const solidFiles = require('./solidFiles.js');
const rdfLib = require('rdflib');

const busPath = {
    "folder" : "public/PFE",
    "file" : "bus"
};

const locationPath = {
    "folder" : "public/PFE",
    "file" : "location"
};

const driverPath = {
    "folder" : "public/PFE",
    "file" : "driver"
};


// prefixes 
const RDF = rdfLib.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
const RDFS =  rdfLib.Namespace("http://www.w3.org/2000/01/rdf-schema#")
const FOAF = rdfLib.Namespace("http://xmlns.com/foaf/0.1/")
const XSD = rdfLib. Namespace("http://www.w3.org/2001/XMLSchema#")

// Bus Turtle File
exports.busTTL = async function (infos){
   
    const graph = rdfLib.graph();

    // File URI 
    const busDoc = rdfLib.sym(
        infos.webId +"/"+ 
        busPath.folder +"/"+
        busPath.file +'.ttl'
    );

    const userUri = rdfLib.sym(infos.webId +'/profile/card#me');

    const driverURI = rdfLib.sym(
        infos.webId +"/"+
        driverPath.folder +"/"+
        driverPath.file + '.ttl'
    );

    const locationURI = rdfLib.sym(
        infos.webId +"/"+
        locationPath.folder +"/"+
        locationPath.file + '.ttl'
    );

    // add the doc to the graph
    graph.add(busDoc, RDF('type'), FOAF('Document'));
    graph.add(busDoc, RDF('maker'), userUri);

    
    graph.add(busDoc, FOAF('conducteur'), driverURI);
    graph.add(busDoc, FOAF('localisation'), locationURI);
    graph.add(busDoc, FOAF('nom'), infos.bus.nom);
    graph.add(busDoc, FOAF('matricule'), infos.bus.matricule);
    graph.add(busDoc, FOAF('marque'), infos.bus.marque);
    
    const content = rdfLib.serialize(undefined, graph, busPath.file +'.ttl', 'text/turtle');
    console.log("content :");
    console.log("-------------------------------------------------------------------------------------------------");
    console.log(content);
    console.log("-------------------------------------------------------------------------------------------------");

    const ttlFileData = { 
        "idp" : infos.login.idp,
        "username" : infos.login.username,
        "password" : infos.login.password,
        "folder" : busPath.folder,
        "file" : busPath.file +'.ttl' ,
        "fileData" : content
    }

    solidFiles.createFile(ttlFileData);

    return ttlFileData;

}

// Driver Turtle File
exports.driverTTL = async function (infos){
   
    const graph = rdfLib.graph();

    // File URI 
    const driverDoc = rdfLib.sym(
        infos.webId +"/"+ 
        driverPath.folder +"/"+
        driverPath.file +'.ttl'
    );

    const userUri = rdfLib.sym(infos.webId +'/profile/card#me');
    
    // let busURI = rdfLib.sym(
    //     infos.webId +"/"+
    //     busPath.folder +"/"+
    //     busPath.file + '.ttl'
    // );

    // add the doc to the graph
    graph.add(driverDoc, RDF('type'), FOAF('Document'));
    graph.add(driverDoc, RDF('maker'), userUri);

    // graph.add(driverDoc, FOAF('conduit'), busURI);
    graph.add(driverDoc, FOAF('nom'), infos.driver.nom);
    graph.add(driverDoc, FOAF('prenom'), infos.driver.prenom);
    graph.add(driverDoc, FOAF('dateNaiss'), infos.driver.dateNaiss);
    graph.add(driverDoc, FOAF('id'), infos.driver.id);

    
    // graph.add(userUri, FOAF('created'), doc);  

    const content = rdfLib.serialize(undefined, graph, driverPath.file +'.ttl', 'text/turtle');
    console.log("content :");
    console.log("-------------------------------------------------------------------------------------------------");
    console.log(content);
    console.log("-------------------------------------------------------------------------------------------------");


    const ttlFileData = { 
        "idp" : infos.login.idp,
        "username" : infos.login.username,
        "password" : infos.login.password,
        "folder" : driverPath.folder,
        "file" : driverPath.file +'.ttl' ,
        "fileData" : content
    }

    solidFiles.createFile(ttlFileData);

    return ttlFileData;

}

// Location Turtle File
exports.locationTTL = async function (infos){
   
    const graph = rdfLib.graph();

    // File URI 
    const locationDoc = rdfLib.sym(
        infos.webId +"/"+ 
        locationPath.folder +"/"+
        locationPath.file +'.ttl'
    );

    const userUri = rdfLib.sym(infos.webId +'/profile/card#me');
    
    // add the doc to the graph
    graph.add(locationDoc, RDF('type'), FOAF('Document'));
    graph.add(locationDoc, RDF('maker'), userUri);

    graph.add(locationDoc, FOAF('longitude'), infos.location.long);
    graph.add(locationDoc, FOAF('latitude'), infos.location.lat);

    // graph.add(userUri, FOAF('created'), doc);  

    const content = rdfLib.serialize(undefined, graph, locationPath.file +'.ttl', 'text/turtle');
    console.log("content :");
    console.log("-------------------------------------------------------------------------------------------------");
    console.log(content);
    console.log("-------------------------------------------------------------------------------------------------");

    const ttlFileData = { 
        "idp" : infos.login.idp,
        "username" : infos.login.username,
        "password" : infos.login.password,
        "folder" : locationPath.folder,
        "file" : locationPath.file +'.ttl' ,
        "fileData" : content
    }

    solidFiles.createFile(ttlFileData);

    return ttlFileData;
}