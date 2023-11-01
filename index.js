const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const conn = require('./db/conn')

const Produto = require('./models/Produto')
const Cliente = require('./models/Cliente')
const Estoque = require('./models/Estoque')
const Pedido = require('./models/Pedido')
const VendaRoutes = require('./routes/VendaRoutes')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.post('/cliente/criar', async (req, res) => {
  const { nome, email } = req.body

  if (!nome || !email) {
    return res.status(400).json({ message: 'Nome e email são obrigatórios' })
  }

  const cliente = await Cliente.create({ nome, email })
  res.json(cliente)
})

app.get('/cliente/listar', async (req, res) => {
  const clientes = await Cliente.findAll()
  res.json(clientes)
})

app.post('/produto/criar', async (req, res) => {
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
})

app.post('/pedido/criar', async (req, res) => {
  const { data, status, VendaId } = req.body

  if (!data || !status || !VendaId) {
    return res
      .status(400)
      .json({ message: 'Data, status e VendaId são obrigatórios' })
  }

  const pedido = await Pedido.create({ data, status, VendaId })
  res.json(pedido)
})

app.get('/cliente/listar', async (req, res) => {
  const clientes = await Cliente.findAll()
  res.json(clientes)
})

app.get('/produto/listar/:tipo', async (req, res) => {
  const { tipo } = req.params
  const produtos = await Produto.findAll({ where: { tipo } })
  res.json(produtos)
})

app.get('/estoque/listar', async (req, res) => {
  const estoques = await Estoque.findAll()

  for (const estoque of estoques) {
    const produto = await Produto.findByPk(estoque.dataValues.ProdutoId)
    estoque.dataValues.Produto = produto.dataValues.nome
  }

  res.json(estoques)
})

// Routes
app.use('/venda', VendaRoutes)

conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))

module.exports = app
