require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const bus = require('./routes/bus.js');
const driver = require('./routes/driver.js');
const location = require('./routes/location.js');
const line = require('./routes/line.js');
const stop = require('./routes/stop.js');
const account = require('./routes/account.js');
const test = require('./routes/test.js');

app.use(bodyParser.json());
app.use('/bus', bus);
app.use('/driver', driver);
app.use('/location', location);
app.use('/line', line);
app.use('/stop', stop);
app.use('/account', account);
app.use('/test', test);


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