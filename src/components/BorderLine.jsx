import React from 'react'

const BorderLine = () => {
  return (
    <div className="flex items-center my-3 sm:my-8">
        <div className="flex-grow h-px bg-gray-300"></div>
        <div className="w-40  sm:w-[20rem] h-[6px] sm:h-2 bg-[#1D51A2] rounded"></div>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>
  )
}

export default BorderLine
