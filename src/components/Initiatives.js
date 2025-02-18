// import React from 'react';
// import './Initiatives.css';

// const Initiatives = () => {
//   return (
//     <div className="initiatives-container" id='initiatives'>
//       <h2 className="initiatives-title">PROJECTS AND INITIATIVES</h2>
//       <div className="initiatives-list">
//         <div className="initiative-item">
//           <h3>GEN-N<br />INITIATIVES</h3>
//           <a href="#navbar" className="click-here">Click Here</a>
//         </div>
//         <div className="initiative-item">
//           <h3>ADVOCACY <br /> AND <br />CAMPAIGNS</h3>
//           <a href="#navbar" className="click-here">Click Here</a>
//         </div>
//         <div className="initiative-item">
//           <h3>TECHNOLOGY<br /> IN <br /> NUTRITION</h3>
//           <a href="#navbar" className="click-here">Click Here</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Initiatives;

import React from 'react';

const Initiatives = () => {
  return (
    <div className="text-center my-20 mx-5" id="initiatives">
      <h2 className="text-xl lg:text-[22px] font-bold mb-6">PROJECTS AND INITIATIVES</h2>
      <div className="flex flex-wrap justify-around items-center gap-4">
        <div className="bg-[#bad8bb] text-[#265728] p-5 text-center w-64 shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-3 leading-relaxed">GEN-N<br />INITIATIVES</h3>
          <a href="https://drive.google.com/drive/folders/1_PZuUUcI1jwHlIVtsgN01VcXAdH8B8PO?usp=drive_link" className="inline-block mt-3 px-3 py-1 text-[#265728] rounded hover:scale-105 transition-transform">Click Here</a>
        </div>
        <div className="bg-[#bad8bb] text-[#265728] p-5 text-center w-64 shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-3 leading-relaxed">ADVOCACY <br /> AND <br />CAMPAIGNS</h3>
          <a href="#navbar" className="inline-block mt-3 px-3 py-1 text-[#265728] rounded hover:scale-105 transition-transform">Click Here</a>
        </div>
        <div className="bg-[#bad8bb] text-[#265728] p-5 text-center w-64 shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-3 leading-relaxed">TECHNOLOGY<br /> IN <br /> NUTRITION</h3>
          <a href="#navbar" className="inline-block mt-3 px-3 py-1 text-[#265728] rounded hover:scale-105 transition-transform">Click Here</a>
        </div>
      </div>
    </div>
  );
};

export default Initiatives;