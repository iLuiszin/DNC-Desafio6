const express = require('express')
const router = express.Router()
const PedidoController = require('../controllers/PedidoController')

router.get('/listar', PedidoController.listar)
router.post('/criar', PedidoController.criar)

module.exports = router
