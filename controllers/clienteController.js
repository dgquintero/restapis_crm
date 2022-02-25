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

exports.mostrarCliente = async (req, res) => {
  // console.log(req.params.idCliente)
  const cliente = await Clientes.findById(req.params.idCliente)

  if(!cliente) {
    res.json({mensaje : 'Ese cliente no existe'})
    next()
  }
  // Mostrar el cliente
  res.json(cliente)
}

exports.actualizarCliente = async(req, res, next) => {
  try {
    const cliente = await Clientes.findOneAndUpdate({ _id: req.params.idCliente },
    req.body, {
      new: true
    })
    res.json(cliente)
  } catch (error) {
    console.log(error)
    next()
  }
}

// Eliminar cliente por su ID
exports.eliminarCliente = async(req, res, next) => {
  try {
    const cliente = await Clientes.findOneAndDelete({ _id: req.params.idCliente })
    res.json({mensaje: 'El cliente ha sido Eliminado'})
  } catch (error) {
    console.log(error)
    next()
  }
}
