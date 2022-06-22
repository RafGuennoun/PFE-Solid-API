var exports = module.exports={};
const res = require('express/lib/response');
const auth = require('solid-auth-cli');
const SolidFileCLient = require("solid-file-client");

const fc   = new SolidFileCLient(auth);


// exports.createFile = async (Infos) => {
//     const path = Infos.webId +'/'+ Infos.folder +'/'+ Infos.file;
//     const data = Infos.fileData;
//     fc.createFile( path, data)
//     .then( fileCreated => {
//         console.log(fileCreated);
//     });
//     return path;
// }


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

        // Part 3 : Read the file

        let content = await fc.readFile(
            webID
            +"/"+
            infos.folder
            +"/"+
            infos.file
        );

        console.log(content);
        return content;

    } catch (error) {
        console.log(`Error : ${error}`);
        return null;
    }
    
}

// async function deletefolder(folderName){
//     fc.deleteFolder(webid+'/'+folderName).then(success => {
//         console.log(`Deleted ${folderName}.`);
//         }, err => console.log(err) );

// }

// exports.deleteFolder = async function(infos){
//     fc.deleteFolder(  
//         infos.webId
//         +"/"+
//         infos.folder
//     ).then(
//         success => { 
//             console.log(`Deleted ${infos.folder}.`); 
//             res.send(`Deleted ${infos.folder}.`);
//         }, 
//         err => {
//             console.log(`ERROR ${err}.`);
//             res.send(`ERROR ${err}.`);
//         } 
//     );
// }