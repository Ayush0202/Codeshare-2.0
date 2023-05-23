const User = require('../models/user')  

const rootRouteMsg = (req, res) => {
    res.send('Hello From Server')
}

const registerUserDisplay = (req, res) => {
    res.send('Register Page - Backend')
}

const registerUser = async (req, res) => {
    
    const user = req.body

    try {

        const existingUser = await User.findOne({email: user.email})
        
        if(existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const newUser = new User(user)
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

module.exports = { rootRouteMsg, registerUserDisplay, registerUser }