require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const getLocation = require('./routes/getLocation.js');
const setLocation = require('./routes/setLocation.js');

app.use(bodyParser.json());
app.use('/getLocation', getLocation);
app.use('/getLocation', setLocation);

app.get('/', (req,res) => {
    console.log("running");
    const result = {
        "name" : "Solid-Api",
        "dev" : "Guennoun Rafik",
        "info" : "PFE M2"
    }
    res.send(result);
});

app.listen( process.env.PORT, () => {
    console.log('Serveur running');
    console.log(`on http://localhost:${process.env.PORT}`);
}); 