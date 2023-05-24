const express = require('express')
const router = express.Router()

const documentController = require('../controller/documentController')

router.get('/codes', documentController.getAllUserCodes) // dashboard
router.post('/new', documentController.saveNewCode) // creating new codeshare
router.get('/:id', documentController.getSavedCode) // getting specefic codeshare

module.exports = router
