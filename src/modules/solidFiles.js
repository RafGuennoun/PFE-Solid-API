var exports = module.exports={};

const auth = require('solid-auth-cli');
const SolidFileCLient = require("solid-file-client");
const util = require('../helpers/utils.js');

const fc   = new SolidFileCLient(auth);

exports.initFiles = async (infos) => {

    try {
        
        // Part 1 : Login
        let session = await auth.currentSession();
        if (!session) { 
            session = await auth.login({
                idp : infos.idp, // e.g. https://solidcommunity.net
                username : infos.username,
                password : infos.password,
            });
            console.log(`Logged in as ${session.webId}.`);     
        }

        // Part 2 : get the web ID
        const webID = session.webId.replace('/profile/card#me','');

        // Part 3 : Create the files

        // File paths
        const bus = webID +'/public/PFE/bus.ttl';
        const driver = webID +'/public/PFE/driver.ttl';
        const location = webID +'/public/PFE/location.ttl';
        
        fc.createFile( bus, "")
        .then( fileCreated => {
            console.log(fileCreated);
        });

        fc.createFile( driver, "")
        .then( fileCreated => {
            console.log(fileCreated);
        });

        fc.createFile( location, "")
        .then( fileCreated => {
            console.log(fileCreated);
        });

        const paths = {
            "bus" : webID +'/public/PFE/bus.ttl',
            "driver" : webID +'/public/PFE/driver.ttl',
            "location" : webID +'/public/PFE/location.ttl',
        }
        
        return paths;
        
    } catch (error) {
        console.log(`Error : ${error}`);
        return null;
    }

}

exports.createFile = async (infos) => {

    try {
        
        // Part 1 : Login
        let session = await auth.currentSession();
        if (!session) { 
            session = await auth.login({
                idp : infos.idp, // e.g. https://solidcommunity.net
                username : infos.username,
                password : infos.password,
            });
            console.log(`Logged in as ${session.webId}.`);     
        }

        // Part 2 : get the web ID
        const webID = session.webId.replace('/profile/card#me','');

        // Part 3 : Create the file

        // File path
        const path = webID +'/'+ infos.folder +'/'+ infos.file;
        const data = infos.fileData;
        fc.createFile( path, data)
        .then( fileCreated => {
            console.log(fileCreated);
        });
        
        return path;
        
    } catch (error) {
        console.log(`Error : ${error}`);
        return null;
    }

}

exports.readFile = async function (infos){

    try {

        // We don't need to login to read data from the "public" file

        let content = await fc.readFile(
            infos.webId
            +"/"+
            infos.folder
            +"/"+
            infos.file
        );

        console.log(content);
        // return content;

        console.log("Turn to json");
        const json = util.convertTTLToJSON(content);
        console.log(json);

        return json;

    } catch (error) {
        console.log(`Error : ${error}`);
        return null;
    }
    
}
