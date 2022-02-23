const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const { urlencoded } = require('express')
const bodyParser = require('body-parser')

// conectar mongo
mongoose.promise = global.Promise
mongoose.connect('mongodb://localhost/restapis', {
  useNewUrlParser: true
})


// crear el servidor
const app = express()

// habilitar bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


// Rutas de la app
app.use('/', routes());

// puerto
app.listen(3000)
