const Cliente = require('../models/Cliente')

module.exports = class ClienteController {
  static async criar(req, res) {
    const { nome, email } = req.body

    if (!nome || !email) {
      return res.status(400).json({ message: 'Nome e email são obrigatórios' })
    }

    const cliente = await Cliente.create({ nome, email })
    res.json(cliente)
  }

  static async listar(req, res) {
    const clientes = await Cliente.findAll()
    res.json(clientes)
  }
}
