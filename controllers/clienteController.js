const Clientes = require('../models/Clientes')

// agrega un nuevo cliente
exports.nuevoCliente = async (req, res)=> {
  const cliente = new Clientes(req.body)
  try {
    // almacenar el registro
    await cliente.save()
    res.json({mensaje: 'Se agregó un nuevo cliente'})
  } catch (error) {
    // si hay un error console.log y next
    console.log(error)
    next()
  }
}


// Obtener clientes de la base de datos
exports.obtenerClientes = async (req, res)=> {
  try {
    const clientes = await Clientes.find({})
    res.json(clientes)
  } catch (error) {
    console.log(error)
    next()
  }
}
