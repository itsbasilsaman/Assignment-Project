import React from 'react'
import Button from './Button'
import HalfRoundedImage from '../assets/homeImgOne.svg'
import One from '../assets/One.webp'
import Two from '../assets/Two.webp'
import Three from '../assets/Three.webp'
import { GoArrowDown } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Wave from '../assets/wave.svg'

function Main() {
  return (
    <>
      <main className='home-section'>
        <div className='main'>
            <div className='flex main-first-section justify-center items-center'> 
              <h1>Education Template for</h1>
            
                <img src={Wave} alt="" className='first-section-wave' />
           
            </div>
           
            <div className='flex main-second-section justify-center items-center'>
              <img src={HalfRoundedImage} alt="No Image" className='half-round-image' />
              <h1>an 
                <span className='main-effects'> Vibrant <img src={Wave}  className='vibrant-wave' /> </span>
                 and 
                 <span className='main-effects'> Engaging <img src={Wave} className='main-effects-wave'  /> </span>
                 </h1>
            </div>
            <div className='flex justify-center items-center main-third-section'>
              <h1>Webflow Website</h1>
            <div className='flex justify-center items-center'>
                <img src={One} alt="No Image" />
                <img src={Two} alt="No Image" />
                <img src={Three} alt="No Image" />
            </div>
            </div>
            <div className='flex justify-center items-center main-forth-section' >
            See why Thema is the best pick for your site!
            </div>
            <div className='flex justify-center items-center main-fifth-section gap-[23px]'>
              <Button/>
              <div className="flex justify-center items-center buy-template-section">
                <div className="button-container">
                  <div className="extra-border"></div>
                  <button className="button">
                    Buy template
                    <div className="line-two"></div>
                    <GoArrowRight />
                  </button>
                </div>
              </div>

            </div>
        </div>




        {/* <Button/> */}
      </main>
    </>
  )
}

export default Main