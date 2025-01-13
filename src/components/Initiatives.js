import React from 'react'
import './Initiatives.css'

const Initiatives = () => {
    return (
      <div className="initiatives-container">
        <h2 className="initiatives-title">Initiatives</h2>
        <div className="initiatives-list">
          <div className="initiative-item">
            <h3>GEN-N<br />INITIATIVES</h3>
            <a href="#" className="click-here">Click Here</a>
          </div>
          <div className="initiative-item">
            <h3>ADVOCACY <br /> AND <br />CAMPAIGNS</h3>
            <a href="#" className="click-here">Click Here</a>
          </div>
          <div className="initiative-item">
            <h3>TECHNOLOGY<br /> IN <br /> NUTRITION</h3>
            <a href="#" className="click-here">Click Here</a>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Initiatives;