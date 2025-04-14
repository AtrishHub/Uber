import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import FinishRide from '../components/FinishRide'

const CaptainRiding = (props) => {
  
  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)



  useGSAP(function () {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0%)',
        duration: 0.5,
        ease: 'power2.inOut',
      })
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: 'power2.inOut',
      })
    }
  }, [finishRidePanel])



  return (
    
     <div className="h-screen">
    <Link
       to="/captain-login relative"  
       className="fixed h-10 right-2 top-2 w-10 flex items-center justify-center rounded-full bg-white "
     >
       <i className=" text-2xl font-semibold ri-home-4-line"></i>
     </Link>
     <div className="h-4/5  ">
     
       <img
         className="w-full h-full object-cover"
         src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
       ></img>
     </div>
     <div className='h-1/5 p-6 flex items-center justify-between bg-yellow-200 relative' 
     onClick={()=>
      setFinishRidePanel(true)
     }
     >

     <h5 onClick={()=>
  {
  props.setRidePopupPanel(false)
  }
} className='p-1 text-center w-[95%] absolute top-0'><i className="text-3xl text-black-600 ri-arrow-down-wide-fill"></i></h5>

     <h4 className='font-semibold'>4 KM away</h4>
     <button className=' flex justify-center w-full mt-5 bg-green-600 text-white font-semibold rounded-lg p-2'>Complete ride</button>

    </div>
    <div ref={finishRidePanelRef} className={"fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"}>
<FinishRide  setFinishRidePanel={setFinishRidePanel}/>
    </div>


    </div>
    
  )
}

export default CaptainRiding
