import React from 'react'
import { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '/src/context/userContext.jsx';

import { useContext } from 'react'

const UserSignup = () => {
 const [firstName, setFirstName] = useState('')
 const [lastName, setLastName] = useState('')
const[email, setEmail] = useState('')
 const[password, setPassword] = useState('')
 const[userData, setUserData] = useState({})

const navigate = useNavigate()

const {user, setUser} = useContext(UserDataContext)

 const submitHandler = async (e) => {
    e.preventDefault()
   const newUser={
    fullname:{
        firstname: firstName,
        lastname: lastName,
    },
     email: email, 
     password: password
   }
   
   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
   if(response.status === 201){
   const data=response.data
    setUser(data.user)
    localStorage.setItem('token',data.token)
    navigate('/home')
   }


setFirstName('')
setLastName('')
setEmail('')
setPassword('')

 }




  return (

        <div className='p-7 flex flex-col justify-between h-screen'>


 
        <div>  
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/> 
      <form  onSubmit={(e)=> submitHandler(e)}>

      <h3 className='text-lg font-medium mb-2 font-semibold '>What's your Name</h3>
      <div className='flex gap-4 '>
      <input type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
         placeholder="First Name"
          required 
          className='bg-[#eeeeee] w-1/2  mb-7 rounded px-4 py-2 border  text-lg placeholder:text-gray-500 text-base mb-4'/>
           <input type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
         placeholder="Last Name"
          required 
          className='bg-[#eeeeee]  w-1/2 mb-7 rounded px-4 py-2 border  text-lg placeholder:text-gray-500 mb-4'/>

      </div>
        


        <h3 className='text-lg font-medium mb-2 font-semibold '>What's your email</h3>
        <input type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         placeholder="email@example.com"
          required 
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-gray-500 mb-4'/>


        <h3 className='text-lg font-medium mb-2 font-semibold '>Enter Password</h3>
        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         placeholder="Password"
          required
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-gray-500 mb-4'/>
           

        <button 
          className='bg-[#111] text-white font-semibold mb-3 b-7 rounded px-4 py-2  w-full text-lg '>
        Create Account</button>
         
      </form>
      <p className='text-center'>Already have a account? 
        <Link to="/login" className='text-blue-600'>Login here</Link> 
        </p>
      </div>

      <div>

        <p className='text-[10px] leading-tight'>
            By proceeding, you consent to get calls, WhatsApp or SMS message, including by automated means, from Uber and its affiliates to the number provided.
        </p>
       
        
      </div>
    </div>
    
  )
}

export default UserSignup
