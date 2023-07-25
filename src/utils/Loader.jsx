import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <div className="loading loading-infinity rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
    
  )
}

export default Loader
