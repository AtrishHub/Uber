import React from 'react'

const LocationSearchPanel = (props) => {




 // sample data for location search panel

 const locations=[
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22C, Near Malholtra's cafe, Sheryians Coding School, Bhopal", 
    "20B, Near Singhai's cafe, Sheryians Coding School, Bhopal",
    "18A, Near Sharma's cafe, Sheryians Coding School, Bhopal",
 ]

  return (
    <div>
   {/* this is a sample data */}

   {
    locations.map(function(elem,idx){
        return <div key={idx} onClick={
            ()=>{
               
               props.setVehiclePanel(true);
                props.setPanelOpen(false);
            }
        } className='flex  border-2 p-3 border-gray-50  active:border-black rounded-xl items-center justify-start  my-2 gap-4'>
        <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center  p-2 rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-bold'>{elem}</h4>
    </div>
    })
   }
   
    
    </div>
  )
}

export default LocationSearchPanel
