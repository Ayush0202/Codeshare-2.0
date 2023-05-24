import axios from 'axios'

const URL = 'http://localhost:5000'


// api to register new user
export const registerUser = async (data) => {
    try {

        const response = await axios.post(`${URL}/register`, data)
        return response.data

    } catch (error) {
        throw error.response.data
    }
}


// api to login existing user
export const loginUser = async (data) => {
    try {

        const response = await axios.post(`${URL}/login`, data)
        return response.data

    } catch (error) {
        throw error.response.data
    }
}


// api to create new document
export const saveNewCode = async (data) => {
    try {

        const response = await axios.post(`${URL}/new`, data)
        return response.data

    } catch (error) {
        throw error.response.data
    }
}


// api to get saved document
export const getSavedDocument = async (id) => {
    try {
        const response = await axios.get(`${URL}/${id}`)
        return response.data
        
    } catch (error) {
        throw error.response.data        
    }

}

export const getAllDocuments = async () => {
    try {
        const response = await axios.get(`${URL}/codes`)
        return response.data

    } catch (error) {
        throw error.response.data
    }
}