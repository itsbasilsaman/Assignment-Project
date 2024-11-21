import React from 'react'
import { TbGridDots } from "react-icons/tb";

function Courses() {
  return (
    <div className='courses flex items-center gap-[10px]'>
    <TbGridDots className='course-icon' />
    <p className='course-title'>Courses</p>
 </div>
  )
}

export default Courses