const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

// conectar mongo
mongoose.promise = global.Promise
mongoose.connect('mongodb://localhost/restapis', {
  useNewUrlParser: true
})


// crear el servidor
const app = express()


// Rutas de la app
app.use('/', routes());

// puerto
app.listen(3000)
