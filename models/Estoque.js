const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Estoque = db.define('Estoque', {
  quantidade: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
})

module.exports = Estoque
