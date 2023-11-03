const Estoque = require('../models/Estoque')
const Produto = require('../models/Produto')

module.exports = class EstoqueController {
  static async listar(req, res) {
    const estoques = await Estoque.findAll()

    for (const estoque of estoques) {
      const produto = await Produto.findByPk(estoque.dataValues.ProdutoId)
      estoque.dataValues.Produto = produto.dataValues.nome
    }

    res.json(estoques)
  }
}
