import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState('')

const submintHandler=(e)=>{
  e.preventDefault()
}



  return (
    <div>
     <h5 onClick={()=>
  {
  props.setRidePopupPanel(false)
  }
} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>

        <h3 className='text-2xl font-semibold mb-5'>Confirm a Ride</h3>

        <div className='flex mt-4 items-center justify-between p-3 bg-gray-300
         rounded-lg border-2 border-black-400'>
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
  <div>
<form onSubmit={(e)=>{
    submintHandler(e)
}}>
<input type="text"  value={otp}   onChange={ (e)=>setOtp(e.target.value)}  placeholder='Enter OTP' className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3'></input>



    <Link to='/captain-riding' 
  className=' flex justify-center w-full text-lg mt-5 bg-green-600 text-white font-semibold rounded-lg p-2' >Confirm</Link>
   <button 
  onClick={()=>{
   props.setConfirmRidePopupPanel(false)
   props.setRidePopupPanel(false)
  }}
  className='w-full mt-2 bg-red-600 text-white text-lg font-semibold rounded-lg p-2' >Cancel</button>
</form>

  </div>



     </div>
  )
  
}

export default ConfirmRidePopUp
