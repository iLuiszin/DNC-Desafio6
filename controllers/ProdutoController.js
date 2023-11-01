const Produto = require('../models/Produto')

module.exports = class ProdutoController {
  static async criar(req, res) {
    const { nome, descricao, preco, quantidade, tipo } = req.body

    if (!nome || !descricao || !preco || !quantidade || !tipo) {
      return res.status(400).json({
        message: 'Nome, descricao, preco, quantidade e tipo são obrigatórios',
      })
    }

    const produto = await Produto.create({
      nome,
      descricao,
      preco,
      quantidade,
      tipo,
    })

    await Estoque.create({ quantidade, ProdutoId: produto.id })

    res.json(produto)
  }

  static async listar(req, res) {
    const produtos = await Produto.findAll()
    res.json(produtos)
  }

  static async listarPorTipo(req, res) {
    const { tipo } = req.params
    const produtos = await Produto.findAll({ where: { tipo } })
    res.json(produtos)
  }
}
