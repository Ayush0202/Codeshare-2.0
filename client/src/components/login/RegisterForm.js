import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { registerUser } from '../../services/api'

import './RegisterForm.css'

// default values of form 
const defaultValue = {
  name: '',
  email: '',
  password: ''
}

// modal alert message
const Alert = ({ message, onClose }) => {
  return (
    <div className="alert">
      <div className="alert-content">
        <div className="alert-message">{message}</div>
        <button className="alert-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const RegisterForm = () => {

  // alert message
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // alert message
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  
  // adding data to form
  const [user, setUser] = useState(defaultValue)

  // navigate after success
  const navigate = useNavigate()

  // handling change to form 
  const onValueChange = (e) => {
      //console.log(e.target.name, e.target.value);
      setUser({ ...user, [e.target.name] : e.target.value })
      //console.log(user)
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    try {
      
      const response = await registerUser(user)
      console.log(response)
      setUser(defaultValue)
      navigate('/login')

    } catch (error) {
 
        console.log(error.message)

        // custon validation error messages
        if(error.message === 'User already exists') {
          setAlertMessage('User already exists');
          setShowAlert(true);
        }

        if(error.message === 'Password too small') {
          setAlertMessage('Password is too small');
          setShowAlert(true);
        }

        if(error.message === 'Invalid email') {
          setAlertMessage('Invalid Email');
          setShowAlert(true);
        }
    }
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
            <div>
              <label >
                Name: 
                <input type="text" value={user.name} name='name' onChange={onValueChange} />
              </label>
            </div>

            <div>
              <label >
                Email: 
                <input type="text" value={user.email} name='email' onChange={onValueChange} />
              </label>
            </div>

            <div>
              <label >
                Password: 
                <input type="password" value={user.password} name='password' onChange={onValueChange} />
              </label>
            </div>

            <button type='submit'>Register</button>

      </form>

      <p>Already signed up? <Link to={'/login'}>Log in here</Link> </p> 

      {/* modal alert messages */}
      {showAlert && (
        <div className="alert-wrapper">
          <Alert message={alertMessage} onClose={handleCloseAlert} />
        </div>
      )}

    </>
  )
}

export default RegisterForm