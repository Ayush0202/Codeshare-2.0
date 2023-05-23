import axios from 'axios'

const URL = 'http://localhost:5000'

// api to register new user
export const registerUser = async (data) => {
    try {
        const response = await axios.post(`${URL}/register`, data)
        return response.data
    } catch (error) {
        //console.log('Error while calling registerUser API', error)
        throw error.response.data
    }
}