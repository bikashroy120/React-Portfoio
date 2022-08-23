import React from 'react'
import "./Navber.css"

function Navber() {
  return (
    <div className='n-wapper'>
        <div className='left_item'>
            <h2>Andrew</h2>
            <span>toggle</span>
        </div>
        <div className='right_item'>
            <ul style={{listStyleType: 'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
            </ul>
            <button className='button'>Contact us</button>
        </div>
    </div>
  )
}

export default Navber