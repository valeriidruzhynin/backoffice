const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

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