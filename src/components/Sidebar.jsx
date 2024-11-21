import React from 'react'
import Contact from './Contact'
import SidebarItems from './SidebarItems'
import { HiDotsHorizontal } from "react-icons/hi";

function Sidebar() {
  return (
    <div className='sidebar flex justify-center items-center'>
      <HiDotsHorizontal />
      {/* <Contact/>
      <SidebarItems/> */}
    </div>
  )
}

export default Sidebar