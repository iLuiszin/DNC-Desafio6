const express = require('express')
const router = express.Router()
const ClienteController = require('../controllers/ClienteController')

router.get('/listar', ClienteController.listar)
router.post('/criar', ClienteController.criar)

module.exports = router
