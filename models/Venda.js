const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Cliente = require('./Cliente')

const Venda = db.define('Venda', {
  data: {
    type: DataTypes.DATE,
    required: true,
  },
  total: {
    type: DataTypes.FLOAT,
    required: true,
  },
})

Cliente.hasMany(Venda)
Venda.belongsTo(Cliente)

module.exports = Venda
