import React from 'react'
import "./Coverpage.css"
import { Link } from "react-router-dom"


function Coverpage() {
  return (
    <div className='cover-container' id='coverpage'>
         <img src='\nutrition_logo333.png' alt="Logo" className="logo" />
         <p className='cover-para'>"Bound by Purpose, United for Nutrition : A Fellowship to Nourish Generations"</p>
      
      <div className="pillar" id="Convene">Convene</div>
      <div className="pillar" id="Celebrate">Celebrate</div>
      <div className="pillar" id="Collaborate">Collaborate</div>
      <div className="pillar" id="Connect">Connect</div>
      <div className="pillar" id="Coach">Coach</div>
    </div>

    
  )
}

export default Coverpage
