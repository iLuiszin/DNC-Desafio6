const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Venda = require('./Venda')

const Pedido = db.define('Pedido', {
  data: {
    type: DataTypes.DATE,
    required: true,
  },
  status: {
    type: DataTypes.STRING,
    required: true,
  },
})

Venda.hasMany(Pedido)
Pedido.belongsTo(Venda)

module.exports = Pedido
