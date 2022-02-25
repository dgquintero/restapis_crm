const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')
const productoController = require('../controllers/productoController')

module.exports = function(){
  // Agrega nuevos clientes via POST
  router.post('/clientes', clienteController.nuevoCliente)
  // Obtener todos los clientes
  router.get('/clientes', clienteController.obtenerClientes)
  // muestra un cliente en especifico
  router.get('/clientes/:idCliente', clienteController.mostrarCliente)
  // Actualizar Cliente
  router.put('/clientes/:idCliente', clienteController.actualizarCliente)
  //Eliminar cliente
  router.delete('/clientes/:idCliente', clienteController.eliminarCliente)


  // PRODUCTOS
  // nuevos productos
  router.post('/productos', productoController.subirArchivo ,productoController.nuevoProducto)
  router.get('/productos', productoController.mostrarProductos)
  router.get('/productos/:idProducto', productoController.mostrarProducto)

  return router
}
