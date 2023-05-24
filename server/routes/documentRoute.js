const express = require('express')
const router = express.Router()

const documentController = require('../controller/documentController')

router.get('/codes', documentController.getAllUserCodes)
router.post('/new', documentController.saveNewCode)

module.exports = router
