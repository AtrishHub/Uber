import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
       <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3 justify-start">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjSr1CrQXa8SlN0ZRqHbx___fjpWsJhERQA&s"
              alt=" "
            ></img>
            <h4 className="text-lg font-semibold"> Harsh Patel</h4>
            </div>
            <div className="text-center">
            <h4 className="text-xl font-semibold ">₹295.20</h4>
            <p className="text-sm  text-gray-600">Earned</p>
          </div>

          </div>

         
          <div className="flex mt-6 p-6 bg-gray-100 rounded-full justify-center items-start gap-2">
            <div className="text-center">
              <i className="text-3xl  mb-2 font-thin ri-time-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center">
              <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
              <h5 className="text-lg font-medium">12</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center">
              <i className=" text-3xl mb-2 font-thin ri-account-box-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetails
