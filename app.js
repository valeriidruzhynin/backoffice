const express = require('express');
const handlebars = require('express-handlebars');
const cors = require('cors');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

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

app.use(jsonParser);

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
}));

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use('/', cors(corsOptions), jsonParser, require('./routes/all'));

app.listen(config.port, () => {
    console.log(`Server\'s working on port ${config.port}`)
});