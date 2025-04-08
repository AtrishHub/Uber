import React from 'react'
import ReactDOM from 'react-dom/client'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/userContext.jsx'
import CaptainContext from './context/CaptainContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
 <UserContext>

   <BrowserRouter>
      <App />
    </BrowserRouter>
   
  </UserContext>
  </CaptainContext>
  
  </StrictMode>,
)
