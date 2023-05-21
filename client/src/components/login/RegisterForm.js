import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { registerUser } from '../../services/api'

const defaultValue = {
  name: '',
  email: '',
  password: ''
}

const RegisterForm = () => {
  
  // adding data to form
  const [user, setUser] = useState(defaultValue)

  const navigate = useNavigate()

  // handling change to form 
  const onValueChange = (e) => {
      console.log(e.target.name, e.target.value);
      setUser({ ...user, [e.target.name] : e.target.value })
      console.log(user)
  }

  const registerUserDetails = async () => {
    await registerUser(user)
    navigate('')
  }
  
  return (
    <>
      <form>
            <div>
              <label >
                Name: 
                <input type="text" name='name' onChange={onValueChange} />
              </label>
            </div>

            <div>
              <label >
                Email: 
                <input type="text" name='email' onChange={onValueChange} />
              </label>
            </div>

            <div>
              <label >
                Password: 
                <input type="password" name='password' onChange={onValueChange} />
              </label>
            </div>

            <button type='submit' onClick={() => registerUserDetails()}>Register</button>

        </form>

        <p>Already signed up? <Link to={'/login'}>Log in here</Link> </p> 



    </>
  )
}

export default RegisterForm