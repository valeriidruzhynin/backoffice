const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

global.config = require('plain-config')();

const app = express();

const whitelist = config.cors.whiteList

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(console.log('Not allowed by CORS'))
        }
    }
}

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use('/', cors(corsOptions), require('./routes/all'));

app.listen(config.port, () => {
    console.log(`Server\'s working on port ${config.port}`)
});