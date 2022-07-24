var exports = module.exports={};

const rdfLib = require('rdflib');
const solidFiles = require('./solidFiles.js');

// prefixes 
const RDF = rdfLib.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
const RDFS =  rdfLib.Namespace("http://www.w3.org/2000/01/rdf-schema#")
const FOAF = rdfLib.Namespace("http://xmlns.com/foaf/0.1/")
const XSD = rdfLib. Namespace("http://www.w3.org/2001/XMLSchema#")

// TODO: match with the new architecture 

// Bus Turtle File
exports.addBus = async function (infos){
   
    const graph = rdfLib.graph();

    const read = {
        "webId" : "https://annuairepfe.solidcommunity.net",
        "folder" : "public/PFE",
        "file" : "directory.ttl"
    };

    const file = await solidFiles.readFile(read);

    const buses = new String(file["foaf:buses"]);
    const p = buses.replace(/.$/,'');
    const pods = p + `,"${infos.busWebId}"]`;

    // const pods =  `["https://grafik.solidcommunity.net","https://bus1.solidcommunity.net"]`;

    // File URI 
    const dirDoc = rdfLib.sym(
        infos.webId + "/public/PFE/directory.ttl"
    );

    const userUri = rdfLib.sym(infos.webId +'/profile/card#me');


    // add the doc to the graph
    graph.add(dirDoc, RDF('type'), FOAF('Document'));
    graph.add(dirDoc, RDF('maker'), userUri);

    graph.add(dirDoc, FOAF('buses'), pods);

    
    const content = rdfLib.serialize(undefined, graph, 'directory.ttl', 'text/turtle');
    console.log("content :");
    console.log("-------------------------------------------------------------------------------------------------");
    console.log(content);
    console.log("-------------------------------------------------------------------------------------------------");

    const ttlFileData = { 
        "idp" : infos.login.idp,
        "username" : infos.login.username,
        "password" : infos.login.password,
        "folder" : "public/PFE",
        "file" : 'directory.ttl' ,
        "fileData" : content
    }

    solidFiles.createFile(ttlFileData);

    return ttlFileData;
}

exports.getBuses = async function (){
    const infos = {
        "webId" : "https://annuairepfe.solidcommunity.net",
        "folder" : "public/PFE",
        "file" : "directory.ttl"
    };

    const content = await solidFiles.readFile(infos);

    const buses = JSON.parse(content["foaf:buses"]) ;
    console.log(buses);

    return buses;
}