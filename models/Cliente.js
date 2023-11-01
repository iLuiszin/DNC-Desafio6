const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Venda = require('./Venda')

const Cliente = db.define('Cliente', {
  nome: {
    type: DataTypes.STRING,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
  },
})

module.exports = Cliente
