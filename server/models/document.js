const { default: mongoose } = require('mongoose')
const mognoose = require('mongoose')

const documentSchema = mognoose.Schema({
    value: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date,
        immutable: true, // cannot be changed
        default: () => Date.now() // saves date everytime document is added
    }
})

const document = mongoose.model('document', documentSchema)

module.exports = document