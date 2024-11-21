import React from 'react'
import { GoArrowDown } from "react-icons/go";
function Button() {
  return (
    <>
      <div className="flex justify-center items-center explore-now-section">
      <div className="button-container">
        <div className="extra-border"></div>
        <button className="button">
          Explore now
          <div className='line-one'></div>
          <GoArrowDown />
        </button>
      </div>
    </div> 
    
    
    </>
  )
}

export default Button