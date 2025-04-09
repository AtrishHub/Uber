import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 onClick={()=>
  {
    props.setVehiclePanel(false)
  }
} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>

  <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
  {/* <div className='flex w-full p-3 items-center mb-2 justify-between  border-2 border-black rounded-lg'>
  <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" />
  <div className='ml-2 w-1/2 '>
    <h4 className='font-bold text-base'>UberGo<span className='mx-1'><i className="ri-user-fill"></i>4</span></h4>
    <h5 className='font-bold text-sm'>2 mins away</h5>
    <p className='font-normal text-sm text-gray-600'>Affordable, compact rides</p>
  </div>
   <h2  className='font-bold text-xl'>₹193.20</h2>
  </div> */}
  <div onClick={()=>{
    props.setConfirmRidePanel(true) 
    props.setVehiclePanel(false)
  }}
   className='flex active:border-2 w-full p-3 items-center mb-2 justify-between  rounded-lg '>
  <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
  <div className='ml-2 w-1/2 '>
    <h4 className='font-bold text-base'>UberGo<span className='mx-1'><i className="ri-user-fill"></i>4</span></h4>
    <h5 className='font-bold text-sm'>2 mins away</h5>
    <p className='font-normal text-xs text-gray-600'>Affordable compact rides</p>
  </div>
   <h2  className='font-bold text-lg'>₹193.20</h2>
  </div>
  
  <div 
   onClick={()=>{
   props.setConfirmRidePanel(true) 
   props.setVehiclePanel(false)
  }}
  
  className='flex  active:border-2  w-full p-3 items-center mb-2 justify-between  rounded-lg'>
  <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
  <div className='-ml-3 w-1/2 '>
    <h4 className='font-bold text-base'>Moto<span className='mx-1'><i className="ri-user-fill"></i>1</span></h4>
    <h5 className='font-bold text-sm'>3 mins away</h5>
    <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
  </div>
   <h2  className='font-bold text-lg'>₹65</h2>
  </div>

  <div 
   onClick={()=>{
    props.setConfirmRidePanel(true) 
    props.setVehiclePanel(false)
  }}
  
  className='flex active:border-2 w-full p-3 items-center mb-2 justify-between  rounded-lg'>
  <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
  <div className='ml-3 w-1/2 '>
    <h4 className='font-bold text-base'>UberAuto<span className='mx-1'><i className="ri-user-fill"></i>3</span></h4>
    <h5 className='font-bold text-sm'>5 mins away</h5>
    <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
  </div>
   <h2  className='font-bold text-lg'>₹118.86</h2>
  </div>
  
    </div>
  )
}

export default VehiclePanel
