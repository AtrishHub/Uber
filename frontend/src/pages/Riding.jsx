import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
  
     <Link to='/home' className='fixed h-10 right-2 top-2 w-10 flex items-center justify-center rounded-full bg-white '>
     <i className=" text-2xl font-semibold ri-home-4-line"></i>
     </Link>

       <div className='h-1/2 '>
       <img className='w-full h-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'></img>

       </div>
       <div className='h-1/2 p-4'>
       <div className="flex items-center justify-between">
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt="car"
        ></img>
        <div className="text-right">
            <h2 className="text-lg font-semibold">Gunjan</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1 ">HR08 AB 1234</h4>
            <p className="text-sm text-gray-600 ">Maruti Suzuki Alto</p>
        </div>
      </div>

      <div className="w-full mt-5">
        
        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
          <i className="text-lg ri-map-pin-user-fill"></i>
          <div>
            <h3 className="font-semibold text-lg">562/11-A</h3>
            <p className="font-normal -mt-1 text-sm text-gray-600">
              Sector 15, Noida
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-3 ">
          <i className=" text-lg ri-cash-line"></i>
          <div>
            <h3 className="font-semibold text-lg">₹193.20</h3>
            <p className="font-normal -mt-1 text-sm text-gray-600">Cash Cash</p>
          </div>
        </div>
      </div>
       <button 
  className='w-full mt-5 bg-green-600 text-white font-semibold rounded-lg p-2' >Make a Payment</button>
       </div>
    </div>
  )
}

export default Riding
