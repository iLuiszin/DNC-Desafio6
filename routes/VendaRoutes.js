const express = require('express')
const router = express.Router()
const VendaController = require('../controllers/VendaController')

router.get('/listar', VendaController.listar)
router.post('/criar', VendaController.criar)

module.exports = router
