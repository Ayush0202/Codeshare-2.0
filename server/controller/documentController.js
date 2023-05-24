const User = require('../models/user')
const Document = require('../models/document')


// api to get all codes of a user on dashboard
const getAllUserCodes = (req, res) => {
    res.send('Hello from /codes backend route')
}


// api to save a new code to the database
const saveNewCode = async (req, res) => {

    // getting data from client
    const data = req.body

    try {

        const newDocument = new Document({
            value: data.codeValue
        })

        await newDocument.save()

        res.status(201).json(newDocument)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = { getAllUserCodes, saveNewCode }