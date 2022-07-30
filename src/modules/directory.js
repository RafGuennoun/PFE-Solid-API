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

    // const lines = new String(file["foaf:lines"]);
    const buses = new String(file["foaf:buses"]);
    let newBuses;
    const p = buses.replace(/.$/,'');
    if (buses == `[]`) { 
        newBuses = p + `"${infos.busWebId}"]`;
    } else {
        newBuses = p + `,"${infos.busWebId}"]`;
    }

    // const pods =  `["https://grafik.solidcommunity.net","https://bus1.solidcommunity.net"]`;

    // File URI 
    const dirDoc = rdfLib.sym(
        infos.webId + "/public/PFE/directory.ttl"
    );

    const userUri = rdfLib.sym(infos.webId +'/profile/card#me');

    // add the doc to the graph
    graph.add(dirDoc, RDF('type'), FOAF('Document'));
    graph.add(dirDoc, RDF('maker'), userUri);

    graph.add(dirDoc, FOAF('buses'), newBuses);
    graph.add(dirDoc, FOAF('lines'), file["foaf:lines"]);


    
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

// exports.deleteBus = async function (infos){
//     const buses = this.getBuses();
//     const busToRemove = infos.busWebId;  
//     console.log(busToRemove);
//     const index = buses.indexOf(busToRemove);
//     console.log(`index = ${index}`);
//     if (index > -1) {
//         console.log("exists in the list");
//         const newBuses = buses.splice(index, 1);
//         return newBuses;
//     }
//     else{
//         return {
//             "exists" : "false"
//         };
//     }
// }

exports.addLine = async function (infos){
   
    const graph = rdfLib.graph(); 

    const read = {
        "webId" : "https://annuairepfe.solidcommunity.net",
        "folder" : "public/PFE",
        "file" : "directory.ttl"
    };

    const file = await solidFiles.readFile(read);

    const lines = new String(file["foaf:lines"]);
    let newLines;
    const l = lines.replace(/.$/,'');
    if (lines == `[]`) {
        newLines = l + `${infos.line}]`;
    } else {
        newLines = l + `,${infos.line}]`;
    }

    // File URI 
    const dirDoc = rdfLib.sym(
        infos.webId + "/public/PFE/directory.ttl"
    );

    const userUri = rdfLib.sym(infos.webId +'/profile/card#me');


    // add the doc to the graph
    graph.add(dirDoc, RDF('type'), FOAF('Document'));
    graph.add(dirDoc, RDF('maker'), userUri);

    graph.add(dirDoc, FOAF('lines'), newLines);
    graph.add(dirDoc, FOAF('buses'), file["foaf:buses"]);

    
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

exports.getLines = async function (){
    const infos = {
        "webId" : "https://annuairepfe.solidcommunity.net",
        "folder" : "public/PFE",
        "file" : "directory.ttl"
    };

    const content = await solidFiles.readFile(infos);

    const lines = content["foaf:lines"];
    console.log(lines);

    return lines;
}