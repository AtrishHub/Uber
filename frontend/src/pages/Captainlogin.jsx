import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'




const Captainlogin = () => {
 const[email, setEmail] = useState('')
 const[password, setPassword] = useState('')

 const {captain, setCaptain} = useContext(CaptainDataContext);
 const navigate = useNavigate()

 const submitHandler =async (e) => {
    e.preventDefault()
   const captain= {   
      email: email, 
        password: password      
    }
    
    const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)
    if(response.status === 200){
        const data=response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
    }
    
          setEmail('')
          setPassword('')
 }


  return (
    
       <div className='p-7 flex flex-col justify-between h-screen'>
        <div>  
        <img className='w-20 mb-3' src="https://pngimg.com/uploads/uber/uber_PNG24.png"/> 
      <form  onSubmit={(e)=> submitHandler(e)}>
        <h3 className='text-lg font-medium mb-2 font-semibold '>What's our Captain's email</h3>
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
      <p className='text-center'>join a fleet?
        <Link to="/captain-signup" className='text-blue-600'>Register as a Captain</Link> 
        </p>
      </div>

      <div>

        <Link to="/login" className='bg-[#F2A950] text-white flex item-center justify-center font-semibold mb-3 b-7 rounded px-4 py-2  w-full text-lg '> Sign in as User</Link>
       
        
      </div>
    </div>
    
  )
}

export default Captainlogin
