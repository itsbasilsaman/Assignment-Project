import React from 'react'
import Courses from './Courses'
import About from './About'
import Share from './Share'
import Sidebar from './Sidebar'
import { IoMdSearch } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";


function Header() {
  return (
    <header className='flex flex-start items-center'> 
   
       <div className='flex justify-center items-center header-left-section'>
          <div className='thema-home-box flex items-center gap-[7px]'>
            <h3 className='thema '>Thema</h3>
            <p className='home-button'>Home</p>
          </div>
          <Courses/>
          <div className='input-field'>
            <input type="text" placeholder='Search courses, or instructors' />
            <span className='search-icon'><IoMdSearch /></span>
          </div>
       </div>


       <div className='header-right-section flex justify-center item-center'>
          <div className='overview-button'>
            <p className='overview-title'>Overview</p>
          </div>
          <About/>
          <Share/>
          <div className='cart-button flex justify-center items-center'>
            <RiShoppingBag4Line />
            <span className='cart-number'>0</span>
          </div>

           
          <Sidebar/>
       </div>
    </header>
  )
}

export default Header