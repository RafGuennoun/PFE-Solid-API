var exports = module.exports={};
const res = require('express/lib/response');
const auth = require('solid-auth-cli');
const SolidFileCLient = require("solid-file-client");

const fc   = new SolidFileCLient(auth);


// exports.createFile = async function (Infos){
//     const path = Infos.webId +'/'+ Infos.folder +'/'+ Infos.file;
//     const data = Infos.fileData;
//     fc.createFile( path, data)
//         .then( fileCreated => {
//         console.log(`Created file ${fileCreated}.`);
//         });
// }


exports.readFile = async function (infos){
    console.log("READ file");
    let content = await fc.readFile(
        infos.webId
        +"/"+
        infos.folder
        +"/"+
        infos.file
    );

    console.log(content);
    return content;
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