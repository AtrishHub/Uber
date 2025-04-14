import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useState } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {

const[ridePopupPanel, setRidePopupPanel]=useState(true)
const[confirmRidePopupPanel, setConfirmRidePopupPanel]=useState(false)
const ridePopupPanelRef = useRef(null)
const ConfirmRidePopupPanelRef = useRef(null)


useGSAP(function(){
  if(ridePopupPanel){
    gsap.to(ridePopupPanelRef.current, {
     transform: 'translateY(0%)', 
      duration: 0.5,
      ease: 'power2.inOut'
    })
  }   else{
    gsap.to(ridePopupPanelRef.current, {
    transform: 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.inOut'
    })
  }
},[ridePopupPanel])

useGSAP(function(){
  if(confirmRidePopupPanel){
    gsap.to(ConfirmRidePopupPanelRef.current, {
     transform: 'translateY(0%)', 
      duration: 0.5,
      ease: 'power2.inOut'
    })
  }   else{
    gsap.to(ConfirmRidePopupPanelRef.current, {
    transform: 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.inOut'
    })
  }
},[confirmRidePopupPanel])





  return (
    <div className="h-screen">
    
     <Link
        to="/captain-login" 
        className="fixed h-10 right-2 top-2 w-10 flex items-center justify-center rounded-full bg-white "
      >
        <i className=" text-2xl font-semibold ri-home-4-line"></i>
      </Link>
     

      <div className="h-3/5 ">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        ></img>
      </div>
      <div className="h-2/5 p-8">
       <CaptainDetails/>
         
        </div>
<div ref={ridePopupPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white  px-3 py-10 pt-14">
<RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
</div>

<div ref={ConfirmRidePopupPanelRef} className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white  px-3 py-10 pt-14">
<ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
</div>
        
      </div>
   
  );
};

export default CaptainHome;
