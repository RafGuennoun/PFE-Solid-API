var exports = module.exports={};

const solidFiles = require('./solidFiles.js');
const rdfLib = require('rdflib');


// prefixes 

const RDF = rdfLib.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
const RDFS =  rdfLib.Namespace("http://www.w3.org/2000/01/rdf-schema#")
const FOAF = rdfLib.Namespace("http://xmlns.com/foaf/0.1/")
const XSD = rdfLib. Namespace("http://www.w3.org/2001/XMLSchema#")


exports.ttlFile = async function (infos){
   
    let graph = rdfLib.graph();

    // File URI 
    let doc = rdfLib.sym( 
        infos.webId +"/"+ 
        infos.fileInfos.folder +"/"+
        infos.fileInfos.file +'.ttl'
    );

    let userUri = rdfLib.sym(infos.webId +'/profile/card#me');

    // add the doc to the graph
    graph.add(doc, RDF('type'), FOAF('Document'));

    // graph.add(documentNN, FOAF('primaryTopic'), DBO('Book'));

    graph.add(userUri, FOAF('name'), "PFE Bus");
    graph.add(userUri, FOAF('matricule'), "123456789");
    graph.add(userUri, FOAF('ligne'), "Alger - Bab Ezzouar");
    graph.add(userUri, FOAF('longitude'), infos.busLocation.log);
    graph.add(userUri, FOAF('latitude'), infos.busLocation.lat);

    var content = rdfLib.serialize(undefined, graph, infos.fileInfos.file +'.ttl', 'text/turtle');
    console.log("content :");
    console.log("-------------------------------------------------------------------------------------------------");
    console.log(content);
    console.log("-------------------------------------------------------------------------------------------------");


    const ttlFileData = { 
        "idp" : infos.login.idp,
        "username" : infos.login.username,
        "password" : infos.login.password,
        "folder" : infos.fileInfos.folder,
        "file" : infos.fileInfos.file +'.ttl' ,
        "fileData" : content
    }

    solidFiles.createFile(ttlFileData);

    return ttlFileData;

}