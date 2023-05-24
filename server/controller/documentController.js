const User = require('../models/user')
const Document = require('../models/document')

const getAllUserCodes = (req, res) => {
    res.send('Hello from /codes backend route')
}

module.exports = { getAllUserCodes }