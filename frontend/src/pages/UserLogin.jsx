import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { UserDataContext } from '../context/userContext'
import {useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import axios from 'axios'




const UserLogin = () => {
 const[email, setEmail] = useState('')
 const[password, setPassword] = useState('')
 const[userData, setUserData] = useState({})

const {user, setUser} = useContext(UserDataContext)

const navigate = useNavigate()

 const submitHandler = async(e) => {
    e.preventDefault()
   const userData={
    email: email,
     password: password
   }


    const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if(response.status === 200){
    const data=response.data    
        setUser(data.user)
        localStorage.setItem('token',data.token)
      
        navigate('/home')
       
    }
    
    
          setEmail('')
          setPassword('')
 }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
        <div>  
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/> 
      <form  onSubmit={(e)=> submitHandler(e)}>
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
        Login</button>
         
      </form>
      <p className='text-center'>New here? 
        <Link to="/signup" className='text-blue-600'>Create New Account</Link> 
        </p>
      </div>

      <div>

        <Link to="/captain-login" className='bg-[#10b461] text-white flex item-center justify-center font-semibold mb-3 b-7 rounded px-4 py-2  w-full text-lg '> Sign in as Captain</Link>
       
        
      </div>
    </div>
  )
}

export default UserLogin
