// import React from 'react'
// import './Events.css'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Events() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   };

//   return (
//     <div className='events-container' id='events'>
//       <p className='events-top'>EVENTS AND UPDATES</p>
//       <p className='events-header'>Recent Events</p>
//       <div className='events-card'>
//         <Slider {...settings}>
//           {data.map((d) => (
//             <div className='eventscard-items'>
//               <div className='eventscard-img'>
//                 <img src={d.img} alt='' className='events-image'/>
//               </div>
//               <div className='events-contents'>
//                 <p>{d.date}</p>
//                 <p>{d.review}</p>
//                 <button className='event-btn'>Read More</button>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   )
// }

// const data = [
//   {
//     date: '08/01/2024',
//     img: '/Recentevents/1st meet.jpg',
//     review: 'Nutrition Fellowship for Nepal: First Meet',
//   },
//   {
//     date: '12/26/2024',
//     img: '/Recentevents/2nd meet.jpg',
//     review: 'Strategic Planning for Fellowship Meet',
//   },
//   {
//     date: '01/02/2025',
//     img: '/Recentevents/Pk data camp.jpg',
//     review: 'Nutrition Data Camp : at Padma Kanya College ',
//   },
//   {
//     date: '01/05/2025',
//     img: '/Recentevents/CAFODAT data camp.jpg',
//     review: 'Nutrition Data Camp : at CAFODAT College',
//   },
//   {
//     date: '01/17/2025',
//     img: '/Recentevents/Meet_and_Greet_12.jpg',
//     review: '2nd Nutrition Fellowship for Nepal Meet',
//   },
//   {
//     date: '01/20/2025',
//     img: '/Recentevents/DC-mmihs1.jpg',
//     review: 'Nutrition Data Camp : at MMIHS',
//   },
  
// ]

// export default Events

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Events() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards per slide
    slidesToScroll: 1
  };

  return (
    <div className='w-full  mx-auto mb-0' id='events'>
      <p className='text-xl lg:text-[22px] font-bold  text-center mt-5'>EVENTS AND UPDATES</p>
      <p className='mb-2 ml-6 text-xl text-green-800'>Recent Events</p>
      <div className='w-full px-10 py-8 bg-gray-100 '>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="px-2"> {/* Adds horizontal spacing */}
              <div className='h-80 w-60 bg-[#bad8bb] text-black overflow-hidden shadow-md'>
                <div className='w-full h-40 p-2'>
                  <img src={d.img} alt='' className='w-full h-full object-cover'/>
                </div>
                <div className='p-3 h-32 flex flex-col justify-between'>
                  <p className='font-semibold text-sm'>{d.date}</p>
                  <p className='text-[18] mt-2'>{d.review}</p>
                  <button className='bg-green-600 text-white py-1 px-2 rounded-md text-[18] hover:bg-green-700 transition-transform transform hover:scale-105 mt-4'>Read More</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    date: '08/01/2024',
    img: '/Recentevents/1st meet.jpg',
    review: 'Nutrition Fellowship for Nepal: First Meet',
  },
  {
    date: '12/26/2024',
    img: '/Recentevents/2nd meet.jpg',
    review: 'Strategic Planning for Fellowship Meet',
  },
  {
    date: '01/02/2025',
    img: '/Recentevents/Pk data camp.jpg',
    review: 'Nutrition Data Camp : at Padma Kanya College',
  },
  {
    date: '01/05/2025',
    img: '/Recentevents/CAFODAT data camp.jpg',
    review: 'Nutrition Data Camp : at CAFODAT College',
  },
  {
    date: '01/17/2025',
    img: '/Recentevents/Meet_and_Greet_12.jpg',
    review: '2nd Nutrition Fellowship for Nepal Meet',
  },
  {
    date: '01/20/2025',
    img: '/Recentevents/DC-mmihs1.jpg',
    review: 'Nutrition Data Camp : at MMIHS',
  },
];

export default Events;
