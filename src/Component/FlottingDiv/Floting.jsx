import React from 'react'
import './Flotting.css'

function Floting({image,text1,text2}) {
  return (
    <div className='Flotting_Box'>
        <img src={image} alt="" />
        <span>
            {text1}
            <br />
            {text2}
        </span>
    </div>
  )
}

export default Floting