const Producto = require('../models/Productos')

// Agrega productos
exports.nuevoProducto = async (req, res, next) => {
  const producto = new Producto(req.body)

  try {
    await producto.save()
    res.json({mensaje: 'Se agrego un nuevo producto'})
  } catch (error) {
    console.log(error)
    next()
  }
}


