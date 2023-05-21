import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { registerUser } from '../../services/api'

// default values of form 
const defaultValue = {
  name: '',
  email: '',
  password: ''
}

const RegisterForm = () => {
  
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

        if(error.message === 'User already exists') {
          alert('User already exist')
        }

        if(error.message === 'Password is too small') {
          alert('Password too small')
        }

        if(error.message === 'Invalid email') {
          alert('Invalid Email')
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



    </>
  )
}

export default RegisterForm