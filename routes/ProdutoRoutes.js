const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')

router.get('/listar', ProdutoController.listar)
router.get('/listar/:tipo', ProdutoController.listarPorTipo)
router.post('/criar', ProdutoController.criar)

module.exports = router
