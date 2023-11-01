const express = require('express')
const router = express.Router()
const EstoqueController = require('../controllers/EstoqueController')

router.get('/listar', EstoqueController.listar)

module.exports = router
