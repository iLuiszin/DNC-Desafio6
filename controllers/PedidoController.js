const Pedido = require('../models/Pedido')

module.exports = class PedidoController {
  static async criar(req, res) {
    const { data, status, VendaId } = req.body

    if (!data || !status || !VendaId) {
      return res
        .status(400)
        .json({ message: 'Data, status e VendaId são obrigatórios' })
    }

    const pedido = await Pedido.create({ data, status, VendaId })
    res.json(pedido)
  }

  static async listar(req, res) {
    const pedidos = await Pedido.findAll()
    res.json(pedidos)
  }
}
