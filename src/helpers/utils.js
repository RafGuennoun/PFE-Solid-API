var exports = module.exports={};

const ttl2jsonld = require('@frogcat/ttl2jsonld');

exports.convertTTLToJSON = function (ttl){
    console.log("From TTL to JSON");
    var jsonld = ttl2jsonld.parse(ttl);
    // console.log(JSON.stringify(jsonld,null,2));
    return jsonld;
}

