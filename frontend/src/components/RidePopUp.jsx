import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
     <h5 onClick={()=>
  {
  props.setRidePopupPanel(false)
  }
} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>

        <h3 className='text-2xl font-semibold mb-5'>New Ride Avilable</h3>

        <div className='flex mt-4 items-center justify-between p-3 bg-gray-300 border-2 border-black-400 rounded-lg '>
            <div className='flex items-center gap-3'>
                <img className='h-12 rounded-full w-12 object-cover' src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg' alt='profile'></img>
                <h2 className='text-lg font-semibold'>Abhi Patel</h2>
            </div>
            <div>
                <h5 className='text-lg font-semibold'>2.2 Km</h5>
            </div>
        </div>


  <div className='w-full mt-5'>
    <div className='flex items-center gap-5 p-3 border-b-2  border-gray-300'>
    <i className=" text-lg ri-map-pin-2-fill"></i>
    <div>
        <h3 className='font-semibold text-lg'>562/11-A</h3>
        <p className='font-normal -mt-1 text-sm text-gray-600'>Sector 15, Noida</p>
    </div>
    </div>
    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
    <i className='text-lg ri-map-pin-user-fill'></i>
    <div>
        <h3 className='font-semibold text-lg'>562/11-A</h3>
        <p className='font-normal -mt-1 text-sm text-gray-600'>Sector 15, Noida</p>
    </div>
    </div>
   
    <div className='flex items-center gap-5 p-3 '>
    <i className=" text-lg ri-cash-line"></i>
    <div>
        <h3 className='font-semibold text-lg'>₹193.20</h3>
        <p className='font-normal -mt-1 text-sm text-gray-600'>Cash Cash</p>
    </div>
    </div>
    
  </div>
  <div className='mt-5 flex w-full items-center justify-between'>
  <button 
  onClick={()=>{
   props.setRidePopupPanel(false) 
  }}
  className='  bg-gray-400 text-white font-semibold rounded-lg p-3 px-10' >Ignore</button>
  <button 
  onClick={()=>{
   props.setConfirmRidePopupPanel(true) 
   props.setRidePopupPanel(false)
  }}
  className='  bg-green-600 text-white font-semibold rounded-lg p-3 px-10' >Accept</button>
  
  </div>
     </div>
  )
}

export default RidePopUp
