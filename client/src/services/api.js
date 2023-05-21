import axios from 'axios'

const URL = 'http://localhost:5000'

// api to register new user
export const registerUser = async (data) => {
    try {
        return await axios.post(`${URL}/register`, data)
    } catch (error) {
        console.log('Error while calling registerUser API', error)
    }
}