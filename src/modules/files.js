var exports = module.exports={};

const auth = require('solid-auth-cli');
const SolidFileCLient = require("solid-file-client");
const util = require('../helpers/utils.js');

const fc   = new SolidFileCLient(auth);


exports.createFile = async (infos) => {

    try {

        // File path
        const path = infos.webId +'/'+ infos.folder +'/'+ infos.file;
        const data = infos.fileData;
        fc.createFile( path, data)
        .then( fileCreated => {
            console.log(fileCreated);
        });

        auth.logout();
        
        return path;
        
    } catch (error) {
        console.log(`Error : ${error}`);
        return null;
    }

}

