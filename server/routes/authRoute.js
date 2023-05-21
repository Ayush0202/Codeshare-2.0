const express = require('express')
const router = express.Router()

const authController = require('../controller/authController')

router.get('/', authController.rootRouteMsg)
router.get('/register', authController.registerUserDisplay)
router.post('/register', authController.registerUser)

module.exports = router