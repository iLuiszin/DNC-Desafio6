const Cliente = require('../models/Cliente')
const Estoque = require('../models/Estoque')
const Produto = require('../models/Produto')
const Venda = require('../models/Venda')

module.exports = class VendaController {
  static async criar(req, res) {
    const { data, total, ClienteId, ProdutoId } = req.body

    if (!data || !total || !ClienteId || !ProdutoId) {
      return res.status(400).json({
        message: 'Data, total, ClienteId e ProdutoId são obrigatórios',
      })
    }

    const estoque = await Estoque.findOne({ where: { ProdutoId } })

    if (estoque.dataValues.quantidade < 1) {
      res.status(400).json({ message: 'Produto sem estoque' })
    }

    const venda = await Venda.create({ data, total, ClienteId, ProdutoId })

    await Estoque.update(
      { quantidade: estoque.dataValues.quantidade - 1 },
      { where: { ProdutoId } }
    )

    res.json(venda)
  }

  static async listar(req, res) {
    const vendas = await Venda.findAll()

    for (const venda of vendas) {
      const cliente = await Cliente.findByPk(venda.dataValues.ClienteId)
      const produto = await Produto.findByPk(venda.dataValues.ProdutoId)

      venda.dataValues.Cliente = cliente.dataValues.nome
      venda.dataValues.Produto = produto.dataValues.nome
    }

    res.json(vendas)
  }
}
