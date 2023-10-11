import React from 'react'
import './home.css'
import PrintSVG from "assets/icons/print.svg"

export const Home = () => {
  return (
    <div className="App">
      <div className="pdf-viewer-container">
      </div>
      <div className="button-container">
        <div className="print-button">
          <img src={PrintSVG} alt="Print SVG"></img>
          <span>Print</span>
        </div>
      </div>
    </div>
  )
}
