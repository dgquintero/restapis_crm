const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')
const productoController = require('../controllers/productoController')
const pedidoController = require('../controllers/pedidoController')

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
  router.put('/productos/:idProducto', productoController.subirArchivo, productoController.actualizarProducto)
  router.delete('/productos/:idProducto', productoController.eliminarProducto)

  // PEDIDOS
  router.post('/pedidos', pedidoController.nuevoPedido)
  // mostrar pedidos
  router.get('/pedidos', pedidoController.mostrarPedidos)
  // mostrar pedido
  router.get('/pedidos/:idPedido', pedidoController.mostrarPedido)
  // Actualizar pedidos
  router.put('/pedidos/:idPedido', pedidoController.actualizarPedido)
  // Eliminar pedido
  router.delete('/pedidos/:idProducto', pedidoController.eliminarPedido)
  return router
}
