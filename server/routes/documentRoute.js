const express = require('express')
const router = express.Router()

const documentController = require('../controller/documentController')

router.get('/codes', documentController.getAllUserCodes)

module.exports = router
