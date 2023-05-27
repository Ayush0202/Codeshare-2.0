const express = require('express')
const router = express.Router()

const authController = require('../controller/authController')
const authRequire = require('../middleware/requireAuth')

router.get('/', authController.rootRouteMsg)
router.get('/register', authController.registerUserDisplay)
router.post('/register', authController.registerUser)
router.get('/login', authController.loginUserDisplay)
router.post('/login', authController.loginUser)
router.delete('/delete', authRequire, authController.deleteUser)

module.exports = router