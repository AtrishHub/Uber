import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import {UserDataContext} from '../context/userContext.jsx'

const UserProtectWrapper = ({children}) => {

const token=localStorage.getItem('token')
const navigate = useNavigate()
const {user,setUser}=useContext(UserDataContext)
const [isLoading,setIsLoading]=React.useState(true)


useEffect(() => {


    if(!token){
    navigate('/login')
    }


axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
    headers: {
        Authorization: `Bearer ${token}`
    }   
}).then((response) => {
    if (response.status === 200) {
        const data=response.data        
        setUser(response.data.user)
        setIsLoading(false)
    }
}
).catch((error) => {
    console.log(error)
    localStorage.removeItem('token')
    navigate('/login')
  
}
)
},
[token])
if(isLoading){
    return <div>Loading...</div>
}

  return (
    <>

        {children}
    </>
  )
}

export default UserProtectWrapper
