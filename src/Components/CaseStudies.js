import React, { useEffect, useNavigate } from "react"
import "./CaseStudies.css"
import "./seperateCase.css"
import CaseStudie from "./CaseStudie.js"
import ThreeSlidingSquares from "./animations/ThreeSlidingSquares.js"
import TurningFillingSquare from "./animations/TurningFillingSquare.js"
import gif from "../Images/AI-landing-page.gif"

const CaseStudies = () => {
  useEffect(() => {
    let body = document.getElementsByClassName("Navbar-body")
    body[0].childNodes[5].style.setProperty('--animation', "drop-shadow 2s ease-out normal");
    setTimeout(() => {
      body[0].style.animation = "hovering 6s infinite linear"
      body[0].childNodes[5].style.setProperty('--animation', "hovering-shadow 6s infinite linear");
    }, "2000")
  })
  const chaneLoc = (event) => {
    let animated
        if (event.target.parentNode.className === "Navbar-body") {
          animated = event.target.parentNode.childNodes[0];
          animated.style.animation = "move-out 1.5s ease-in"
          animated = event.target.parentNode.style.animation = "fade-out 1.25s linear 0.25s"
          
        }
        else {
          animated = event.target.parentNode
          animated.style.animation = "move-out 1.5s ease-in"
          event.target.parentNode.parentNode.style.animation = "fade-out 1.25s linear 0.25s"
        }
        setTimeout(() => {
          window.location = "/"
        }, 1500)
  }
  return (
    <div className="CaseStudies-container">
      <div className="wrapper">
        <div className="center-line">
          <a href="#" className="scroll-icon"><i className="fas fa-caret-up"></i></a>
        </div>
        <div className="row case-npm-package">
          <CaseStudie 
            title="npm package" 
            period="summer 2022" 
            text="This project started out as some practice for my CSS animation skills, 
              but because a couple of classmates really liked my animations 
              I decided to create a npm package that exports them as React components.
              These Components are easy to manipulate trough props (color, size, animation speed, ect...) so that they can be used in any situation.
              I am still working on this and am hoping to publish it by the end of the summer." 
            link="/"
          />
          <div className="case-npm-package-animation-container">
            <div className="case-npm-package-animation">
              <ThreeSlidingSquares primColor="rgb(99, 79, 232)" size="70%" borderWidth="3vh" />
            </div>
            <div className="case-npm-package-animation">
              <TurningFillingSquare primColor="rgb(99, 79, 232)" borderWidth="8px"/>
            </div>
            <div className="case-npm-package-hover-text">Hover over them!</div>
          </div>
          
        </div>
        <div className="row navbar-project-container">
          <CaseStudie 
            title="interactive nav element" 
            period="june 2022" 
            text={`I found a video showcasing something similar to this online, 
            and I tought to myself: "I can do that too!"
            I started working on it with the suspicion that this was done with pseudo elements and some skew() propperties. 
            After a day of playing around and banging my head against my desk, 
            I figured out how skew() works and started getting some results, 
            a day later I had finished, but I wasn't satisfied with the results yet. 
            I didn't like that it was static and the colors didn't fit in my mind.
            After playing around with it and adding an animation, I was happy with it. 
            The only thing that doesn't work as well on here as on the project file is the fact that when you press on of the boxes it just redirects you back to this site, 
            since I just ripped it out of that project.`}
            link="/"
          />
          <div className="Navbar-body">
              <div style={{"--i": 6}} onClick={(event) => {chaneLoc(event)}}>
                <div>&lt; About Me /&gt;</div>
              </div>
              <div style={{"--i": 5}} onClick={(event) => {chaneLoc(event)}}>
                <div>&lt; Projects /&gt;</div>
              </div>
              <div style={{"--i": 4}} onClick={(event) => {chaneLoc(event)}}>
                <div>&lt; Expieriences /&gt;</div> 
              </div>
              <div style={{"--i": 3}} onClick={() => {window.open('https://github.com/Tim-Poels');}}>
                <div>&lt; GitHub /&gt;</div>
              </div>
              <div style={{"--i": 2}} onClick={(event) => {chaneLoc(event)}}>
                <div>&lt; Resume /&gt;</div>
              </div>
              <div style={{"--i": 1}} onClick={(event) => {chaneLoc(event)}}>
                <div>&lt; Contact /&gt;</div>
              </div>
            </div>
        </div>
        <div className="row">
          <CaseStudie 
            title="AI Frontend" 
            period="may 2022" 
            text="This was our second group project, 
            toghether with 2 classmates we were tasked to create the front end for BeCode’s AI bootcamp class. 
            We had full creative freedom and thus were allowed to have some fun and experiment. 
            Eventually we were able to come up with a fun design and bring it to life within a week and this is the result, 
            unfortunatly due to us not having acces to the server anymore the lading page is all we have to show for it. 
            The technologies we used for this application consist of React for rendering, 
            CSS animations for smooth transition between pages,
            Bycript for the secure authentication,
            canvas for the fun matrix background." 
            link="/"
          />
          <img src={gif} style={{width: "25vw", margin: "auto", borderRadius: "5px"}}></img>
        </div>
        <div className="row">
          <CaseStudie 
            title="test"
            period="30/06"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor inviduer temp u et dolor. Ut enim ad minim veniam, quis nostrud exerci. Lorem ipsum dolor sit amet nunc nonumy eirmod tempor inviduer temp u et"
            link="/"
          />
        </div>
      </div>
    </div>
  )
}

export default CaseStudies;