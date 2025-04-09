import React from 'react'
import {useState} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'


const Home = () => {
  
  const[pickup, setPickup] = useState('')
  const[destination, setDestination] =useState('')
  const[panelOpen, setPanelOpen] = useState(false)
  const panelRef =useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)


const submitHandler = (e) => {
  e.preventDefault()  
}  

useGSAP(function(){
  if(panelOpen){
    gsap.to(panelRef.current, {
      height: '70%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
    gsap.to(panelCloseRef.current, {
    opacity: 1,
    duration: 0.5,
    })  
  }   else{
    gsap.to(panelRef.current, {
      height: '0%', 
      duration: 0.5,
      ease: 'power2.inOut'
    })
    gsap.to(panelCloseRef.current, {
      opacity: 0,
      duration: 0.5,
    })
  }
},[panelOpen])



useGSAP(function(){
  if(vehiclePanel){
    gsap.to(vehiclePanelRef.current, {
      translateY: '0%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
  }
  else{
    gsap.to(vehiclePanelRef.current, {
      translateY: '100%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
  }
},[vehiclePanel])

useGSAP(function(){
  if(confirmRidePanel){
    gsap.to(confirmRidePanelRef.current, {
      translateY: '0%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
  }
  else{
    gsap.to(confirmRidePanelRef.current, {
      translateY: '100%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
  }
},[confirmRidePanel])


useGSAP(function(){
  if(vehicleFound){
    gsap.to(vehicleFoundRef.current, {
      translateY: '0%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
  }
  else{
    gsap.to(vehicleFoundRef.current, {
      translateY: '100%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
  }
},[vehicleFound])


useGSAP(function(){
  if(waitingForDriver){
    gsap.to(waitingForDriverRef.current, {
      translateY: '0%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
  }
  else{
    gsap.to(waitingForDriverRef.current, {
      translateY: '100%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
  }
},[waitingForDriver])




  return (
    <div className='relative h-screen w-screen overflow-hidden'>
    <img className='w-16 absolute left-5 top-5'  src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'></img>
<div className='h-screen w-screen'>
  {/* image for temporary use */}

  <img className='w-full h-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'></img>
</div>
<div className='flex flex-col justify-end absolute top-0 w-full h-screen'>
  <div className='h-[30%]  relative p-5 bg-white'>
    <h5 ref={panelCloseRef} onClick={()=>{
      setPanelOpen(false)
    }} className='absolute right-6 top-6 text-2xl opacity-0'>
    <i className="ri-arrow-down-wide-fill"></i>

    </h5>
  <h4 className='text-2xl font-semibold'>Find a Trip</h4>
  <form onSubmit={(e)=> submitHandler(e)} className='flex flex-col'> 
   <div className="line absolute h-16 top-[42%] left-10 w-1 rounded-full bg-gray-900"></div>

    <input  onClick={()=>{
      setPanelOpen(true)
    }} value={pickup} onChange={(e)=>{setPickup(value)}} type='text' placeholder='Add a Pickup Location' className='bg-[#eeeeee] text-base rounded-lg px-12 py-2 w-full mb-3 mt-4'/>
    <input
    onClick={()=>{
      setPanelOpen(true)
    }}
    
    value={destination} onChange={(e)=>{setDestination(value)}} type='text' placeholder='Add your destination' className='bg-[#eeeeee]  text-base rounded-lg px-12 py-2 w-full mb-3 '/>
  </form>
  </div>
  <div   ref={panelRef} className='h-[0]  bg-white p-2'> 
    <LocationSearchPanel    setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
  </div>
</div>

<div ref={vehiclePanelRef} className='fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
  <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
</div>  
  

<div ref={confirmRidePanelRef} className='fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
  <ConfirmRide  setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} setVehicleFound={setVehicleFound}/>
</div>  
<div ref={vehicleFoundRef} className='fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
 <LookingForDriver setVehicleFound={setVehicleFound}/>
</div>  
  
<div ref={waitingForDriverRef} className='fixed z-10 w-full bottom-0  bg-white px-3 py-10 pt-14'>
 <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
</div> 

</div>
  )
}

export default Home
