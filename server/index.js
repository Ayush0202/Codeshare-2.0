const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')

const authRoute = require('./routes/authRoute')
const documentRoute = require('./routes/documentRoute')

const app = express()

dotenv.config()

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// connecting database

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.iv6whmq.mongodb.net/${process.env.DB_NAME}`, {
    useUnifiedTopology: true})
.then(() => console.log("DB Connected"))
.catch((err) => console.log(err));

app.use('/', authRoute)
app.use('/', documentRoute)

app.listen(5000, (req, res) => {
    console.log('Server running on port 5000')
})