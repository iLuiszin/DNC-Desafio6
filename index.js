const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const conn = require('./db/conn')

const ProdutoRoutes = require('./routes/ProdutoRoutes')
const ClienteRoutes = require('./routes/ClienteRoutes')
const EstoqueRoutes = require('./routes/EstoqueRoutes')
const PedidoRoutes = require('./routes/PedidoRoutes')
const VendaRoutes = require('./routes/VendaRoutes')

require('dotenv').config()

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/venda', VendaRoutes)
app.use('/produto', ProdutoRoutes)
app.use('/cliente', ClienteRoutes)
app.use('/estoque', EstoqueRoutes)
app.use('/pedido', PedidoRoutes)

conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))

module.exports = app
