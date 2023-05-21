const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: [6, 'Password is too small']
    }
})

const user = mongoose.model('user', userSchema)

module.exports = user