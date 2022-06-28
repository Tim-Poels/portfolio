import React, { useEffect } from 'react';
import "./LandingPage.css"
import Headshot from "../Images/IMG_20220530_113349.jpg"
import SquareOfDots from "./SquareOfDots.js"

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <div className='LandingPage-name'>
        <h1>
          Tim 
          <br></br>
          Poels
          </h1>
      </div>
      <div className='LandingPage-about'>
        <div style={{height: "10%"}}></div>
        <div className='LandingPage-about-title'>
          Frontend Developer.
          <div className="LandingPage-about-title-text">Passionate about UX Design</div>
        </div>
        <div className='LandingPage-about-text-container'>
          <div className='LandingPage-about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing el bekjbgei placeholder text 1</div>
          <div className='LandingPage-about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing el bekjbgei placeholder text 2</div>
        </div>
        <div></div>
      </div>
      <div className='LandingPage-picture'>
        <div>
          <img src={Headshot}></img>
          <SquareOfDots color="rgb(120, 228, 120)" translate="-60%, -350%" size="5vw" />
          <SquareOfDots color="rgb(115, 87, 229)" translate="270%, -250%" size="5vw" />
        </div>
      </div>
      <div className="LandingPage-animation">
        <div></div>
        <div className="LandingPage-animation-scroll"></div>
        
      </div>
    </div>
  )
}

export default LandingPage