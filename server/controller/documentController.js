const User = require('../models/user')
const Document = require('../models/document')


// api to get all codes of a user on dashboard
const getAllUserCodes = async (req, res) => {
    try {
        const document = await Document.find({}).sort({ createdAt: -1 })
        // console.log(document)
        res.status(200).json(document)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


// api to save a new code to the database
const saveNewCode = async (req, res) => {

    // getting data from client
    const data = req.body

    try {
        // creating a new document
        const newDocument = new Document({
            value: data.codeValue
        })

        // saving new document
        await newDocument.save()

        // document saved
        res.status(201).json(newDocument)
        
    } catch (error) {
        // document not saved
        res.status(400).json({message: error.message})
    }
}


// api to get saved code
const getSavedCode = async (req, res) => {

    // getting document based on id
    const id = req.params.id

    try {
        // searching database based on document id
        const document = await Document.findById(id)
        // document found
        // send document to client
        res.status(201).json(document)

    } catch (error) {
        // document not found
        res.status(400).json({message: error.message})
    }
}

module.exports = { getAllUserCodes, saveNewCode, getSavedCode }