const express = require('express')
const routes = require('./routes')

// crear el servidor
const app = express()


// Rutas de la app
app.use('/', routes());

// puerto
app.listen(3000)
