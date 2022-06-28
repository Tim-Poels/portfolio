import React from 'react'
import "./App.css"
import LandingPage from "./Components/LandingPage.js"
import CaseStudies from "./Components/CaseStudies.js"

const App = () => {
  return (
    <div className="App">
      <div className="page">
        <LandingPage />
      </div>
      <div className="page" style={{backgroundColor: "white"}}>
        <CaseStudies />
      </div>
    </div>
  )
}

export default App