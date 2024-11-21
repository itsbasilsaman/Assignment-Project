import React from 'react'
import { FaCircle } from "react-icons/fa";

function About() {
  return (
    <div className='about-button flex items-center gap-[10px]'>
      <p className='about-title'>About</p>
     <span className='about-icon'> <FaCircle /></span>
    </div>
  )
}

export default About