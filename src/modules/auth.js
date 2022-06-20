var exports = module.exports={};
const auth = require('solid-auth-cli');
const { SolidNodeClient } = require('solid-node-client');
const client = new SolidNodeClient();

exports.loginToPOD = async function(podsInfo){
    console.log("Try to login");
    let session = await auth.currentSession();
    if (!session) { 
        session = await client.login({
            idp : podsInfo.idp, // e.g. https://solidcommunity.net
            username : podsInfo.username,
            password : podsInfo.password,
        });
        console.log(`Logged in as ${session.webId}.`);     
    }

    return session.webId;
          
}

exports.logout = async function(){
    console.log("Try to logout");
    let res;
    await client.logout()
    .then(
        success => { 
            console.log("Logged out"); 
            res = "Logged out succesfully";
        }, 
        err => {
            console.log(`ERROR ${err}.`);
            res = "ERROR in logout";
        } 
    );
    return res;        
}






