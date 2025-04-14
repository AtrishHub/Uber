import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import Riding from './pages/Riding'

import UserLogout from './pages/UserLogout'
import CaptainSignup from './pages/CaptainSignup'
import Captainlogin from './pages/Captainlogin'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainRiding from './pages/CaptainRiding'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/riding" element={<Riding/>} />
        <Route path="/captain-riding" element={<CaptainRiding/>} />

        <Route path="/captain-login" element={<Captainlogin/>} />
        <Route path="/captain-signup" element={<CaptainSignup/>} />
        <Route path="/home" element={ <UserProtectWrapper>
         <Home/> 
        </UserProtectWrapper>} />

        <Route path="/user/logout" element={<UserProtectWrapper><UserLogout/></UserProtectWrapper>} />

        <Route path="/captain-home" element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>} />
      </Routes>


    </div>
  )
}

export default App
