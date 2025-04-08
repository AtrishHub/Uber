import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const CaptainSignup = () => {

const navigate = useNavigate()



    const [firstName, setFirstName] = useState('')
     const [lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')
     const[password, setPassword] = useState('')

      const[vehicleColor, setVehicleColor] = useState('')
      const[vehiclePlate, setVehiclePlate] = useState('')
      const[vehicleCapacity, setVehicleCapacity] = useState('')
      const[vehicleType, setVehicleType] = useState('')


const {captain, setCaptain} = useContext(CaptainDataContext);


     const submitHandler = async (e) => {
        e.preventDefault()
        const captainData={
            fullname:{
                firstname: firstName,
                lastname: lastName,
            },
             email: email,  
            password: password ,
            
            vehicle:{
              color: vehicleColor,
              plate: vehiclePlate,
              capacity: vehicleCapacity,
              vehicleType: vehicleType,
            }
        }
        

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

        if(response.status === 201){
        const data=response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
        }
              setFirstName('')
                setLastName('')
              setEmail('')
              setPassword('')
              setVehicleColor('')
              setVehiclePlate('')
              setVehicleCapacity('')
              setVehicleType('')
     }
  return (
    <div className='py-5 px-5 flex flex-col justify-between h-screen'>


 
    <div>  
    <img className='w-16 mb-10' src="https://pngimg.com/uploads/uber/uber_PNG24.png"/> 
  <form  onSubmit={(e)=> submitHandler(e)}>

  <h3 className='text-lg font-medium font-semibold mb-2'>What's Our Captain's Name</h3>
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
    


    <h3 className='text-lg font-medium mb-2 font-semibold '>What's Our Captain's email</h3>
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
       
<div>
<h3 className='text-lg font-medium mb-2 font-semibold '>Vehicle Details</h3>
<div className='flex gap-4 '>   

  <input type="text"
    value={vehicleColor}
    onChange={(e) => setVehicleColor(e.target.value)}
     placeholder="Vehicle Color"
      required 
      className='bg-[#eeeeee] w-1/2  mb-7 rounded px-4 py-2 border  text-lg placeholder:text-gray-500 text-base mb-4'/>
       <input type="text"
    value={vehiclePlate}
    onChange={(e) => setVehiclePlate(e.target.value)}
     placeholder="Vehicle Plate"
      required 
      className='bg-[#eeeeee]  w-1/2 mb-7 rounded px-4 py-2 border  text-lg placeholder:text-gray-500 mb-4'/>



</div>

<div className='flex gap-4 '>
    
<input type="text"
    value={vehicleCapacity}
    onChange={(e) => setVehicleCapacity(e.target.value)}
     placeholder="Vehicle Capacity"
      required 
      className='bg-[#eeeeee] w-1/2  mb-7 rounded px-4 py-2 border  text-lg placeholder:text-gray-500 text-base mb-4'/>

        <select   defaultselected="car"
        value={vehicleType}
        onChange={(e) => setVehicleType(e.target.value)}
        className='bg-[#eeeeee] w-1/2  mb-7 rounded px-4 py-2 border  text-lg placeholder:text-gray-500 text-base mb-4'>
        <option value="car">Car</option>
        <option value="motorcycle">Motorcycle</option>
        <option value="auto">Auto</option>
        </select>

       
</div>

</div>


     
    <button 
      className='bg-[#111] text-white font-semibold mb-3 b-7 rounded px-4 py-2  w-full text-lg '>
    Create Captain Account</button>
     
  </form>
  <p className='text-center'>Already have a account? 
    <Link to="/captain-login" className='text-blue-600'>Login here</Link> 
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

export default CaptainSignup
