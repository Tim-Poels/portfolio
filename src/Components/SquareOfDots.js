import React from "react";
import "./SquareOfDots.css"

const SquareOfDots = (props) => {
  let dotStyle = {}
  let containerStyle = {}
  if (props.translate) {
    containerStyle.transform = `translate(${props.translate})`
  }
  if (props.color) {
    dotStyle.backgroundColor = props.color;
  }
  if (props.size) {
    containerStyle.width = props.size;
    containerStyle.height = props.size;
  }
  return (
    <div className="SquareOfDots-container" style={containerStyle}>
      <div className="SquareOfDots-row">
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
      </div>
      <div className="SquareOfDots-row">
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
      </div>
      <div className="SquareOfDots-row">
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
      </div>
      <div className="SquareOfDots-row">
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
      </div>
      <div className="SquareOfDots-row">
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
      </div>
      <div className="SquareOfDots-row">
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
      </div>
      <div className="SquareOfDots-row">
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
      </div>
      <div className="SquareOfDots-row">
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
      </div>
      <div className="SquareOfDots-row">
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
      </div>
      <div className="SquareOfDots-row">
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
        <div style={dotStyle} ></div>
      </div>
    </div>
  )
}

export default SquareOfDots;