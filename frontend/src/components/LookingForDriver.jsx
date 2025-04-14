import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
         
    <h3 className='text-2xl font-semibold mb-5'>Looking For Driver</h3>
  <div className='flex items-center justify-between flex-col'>
  <img className='h-20' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png' alt='car'></img>
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
    </div>
  )
}

export default LookingForDriver
