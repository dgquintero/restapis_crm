const Pedidos = require('../models/Pedidos')
const Productos = require('../models/Productos')

exports.nuevoPedido = async (req, res, next) => {
  const pedido = new Pedidos(req.body)
  try {
    await pedido.save()
    res.json({mensaje: 'Se agregó un nuevo pedido'})
  } catch (error) {
    console.log(error)
    next()
  }
}

exports.mostrarPedidos = async (req, res, next) => {
  try {
    // Obtener todos los Pedidos
    const pedidos = await Pedidos.find({}).populate('cliente').populate({
      path: 'pedido.producto',
      model: 'Productos'
    })
    res.json(pedidos)
    
  } catch (error) {
    console.log(error)
    next()
  }
}

exports.mostrarPedido = async (req, res, next) => {
  // console.log(req.params.idPedido)
  const pedido = await Pedidos.findById(req.params.idPedido).populate('cliente').populate({
    path: 'pedido.producto',
    model: 'Productos'
  })
  if (!pedido) {
    res.json({mensaje: 'Ese pedido no existe'})
    return next()
  }
  res.json(pedido)
}

exports.actualizarPedido = async (req, res, next) => {
  try {
    let pedido = await Pedidos.findOneAndUpdate({_id: req.params.idPedido},
      req.body, {
        new: true
      })
      .populate('cliente')
      .populate({
        path: 'pedido.producto',
        model: 'Productos'
      })
    res.json(pedido)
  } catch (error) {
    console.log(error)
    next()
  }
}

exports.eliminarPedido= async(req, res, next) => {
  try {
    const pedidos = await Pedidos.findOneAndDelete(req.params.idPedido)
    res.json({message: 'El pedido fue eliminado con exito'})

  } catch (error) {
    console.log(error)
    next()
  }
}
