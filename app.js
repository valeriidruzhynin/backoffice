const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
}));

app.use(express.static('public'))

app.use('/', require('./routes/all'))

app.listen(3000, () => {
    console.log('Server\'s working on port 3000')
})