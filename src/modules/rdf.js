var exports = module.exports={};

const rdfLib = require('rdflib');

// prefixes 
const RDF = rdfLib.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
const RDFS =  rdfLib.Namespace("http://www.w3.org/2000/01/rdf-schema#")
const FOAF = rdfLib.Namespace("http://xmlns.com/foaf/0.1/")
const XSD = rdfLib. Namespace("http://www.w3.org/2001/XMLSchema#")

// TODO: match with the new architecture 
