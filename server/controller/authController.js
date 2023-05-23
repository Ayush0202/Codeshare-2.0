const User = require('../models/user')  
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const rootRouteMsg = (req, res) => {
    res.send('Hello From Server')
}

const registerUserDisplay = (req, res) => {
    res.send('Register Page - Backend')
}

const registerUser = async (req, res) => {
    
    const user = req.body

    try {

        // validating user data

        // checking for existing user
        const existingUser = await User.findOne({email: user.email})
        if(existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // checking if email is in correct format
        // correct format of email should have '@' and '.com'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.email)) {
        return res.status(409).json({ message: 'Invalid email' });
        }

        // checking if password length is atleast 5
        const passwordLength = user.password.length
        if(passwordLength < 5) {
            return res.status(409).json({message: 'Password too small'})
        }

        // password hashed 
        const hashedPassword = await bcrypt.hash(user.password, 10)

        // no problems found in user data
        // proceed to save data in database

        // saving data in database
        const newUser = new User({
            name: user.name, 
            email: user.email,
            password: hashedPassword
        })
        await newUser.save()

        const token = jwt.sign({userId: newUser._id}, `${process.env.SECRET_KEY}`)

        res.status(201).json(newUser) // data saved successfully

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

module.exports = { rootRouteMsg, registerUserDisplay, registerUser }