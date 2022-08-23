import React from 'react'
import Card from '../Card/Card'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import './Services.css'

function Services() {
  return (
    <div className='services'>
        <div className="s-left">
            <span>My Awesome</span>
            <span>services</span>
            <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printing
            </spane>
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        <div className="s_right">
            <div style={{left:'14rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
            />
            </div >
            <div style={{top:"12rem",left:'-4rem'}}>
            <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
            </div>

            <div style={{top:"19rem",left:'12rem'}}>
            <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
            </div>
            <div className="blur s-blur2"></div>
            
        </div>
    </div>
  )
}

export default Services