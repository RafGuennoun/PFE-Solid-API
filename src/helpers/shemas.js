/* GET LOCATION : _____________________________________________________________________________*/
// if the file is not in public we need to login
const getLocation_body = {
    "idp" : "https://solidcommunity.net",
    "username" : "",
    "password" : "",
    "folder" : "",
    "file" : ""
}

// if the file is in public we don't need to login
const getLocation_public_body = {
    "webId" : "https://grafik.solidcommunity.net",
    "folder" : "",
    "file" : ""
}


//* SET LOCATION : _____________________________________________________________________________*/

const setLocation_body = {
    "login" :  {
        "idp" : "https://solidcommunity.net",
        "username" : "",
        "password" : "" 
    },
    "webId" : "https://grafik.solidcommunity.net",
    "fileInfos" : {
        "folder" : "",
        "file" : ""
    },
    "busLocation" : {
        "log" : "",
        "lat" : ""
    }
}

/* BUS : _________________________________________________________________________________*/
const busTTL_body = {
    "login" :  {
        "idp" : "https://solidcommunity.net",
        "username" : "",
        "password" : "" 
    },
    "webId" : "https://grafik.solidcommunity.net",
    "bus" : {
        "matricule" : "",
        "nom" : "",
        "marque" : "",
        "ligne" : ""
    }
}

/* DRIVER : _________________________________________________________________________________*/
const driverTTL_body = {
    "login" :  {
        "idp" : "https://solidcommunity.net",
        "username" : "",
        "password" : "" 
    },
    "webId" : "https://grafik.solidcommunity.net",
    "driver" : {
        "nom" : "",
        "prenom" : "",
        "dateNaiss" : "",
        "id" : ""
    }
}


/* LOCALISATION : _________________________________________________________________________________*/
const locationTTL_body = {
    "login" :  {
        "idp" : "https://solidcommunity.net",
        "username" : "",
        "password" : "" 
    },
    "webId" : "https://grafik.solidcommunity.net",
    "location" : {
        "long" : "",
        "lat" : ""
    }
}


/* PROFILE : _________________________________________________________________________________*/
const profile_body = {
    "webId" : "https://grafik.solidcommunity.net/profile/card#me"
}


/* AUTH : ____________________________________________________________________________________*/
const login_body = {
    "idp" : "https://solidcommunity.net",
    "username" : "",
    "password" : ""
}


/* FILES : ____________________________________________________________________________________*/
const createFile_body = {
    "webId" : "https://grafik.solidcommunity.net",
    "folder" : "",
    "file" : "",
    "fileData" : ""
}

const readFile_body = {
    "webId" : "https://grafik.solidcommunity.net",
    "folder" : "",
    "file" : ""
}

