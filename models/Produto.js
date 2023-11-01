const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Estoque = require('./Estoque')
const Venda = require('./Venda')

const Produto = db.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    required: true,
  },
  descricao: {
    type: DataTypes.STRING,
    required: true,
  },
  preco: {
    type: DataTypes.FLOAT,
    required: true,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  tipo: {
    type: DataTypes.STRING,
    required: true,
  },
})

Produto.hasMany(Venda)
Venda.belongsTo(Produto)

Produto.hasMany(Estoque)
Estoque.belongsTo(Produto)
module.exports = Produto
