import React from 'react'
import './Events.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Events() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:1,
  };
  return (
    <div className='events-container'>
      <p className='events-top'>EVENTS AND UPDATES</p>
      <p className='events-header'>Recent Events</p>
      <div className='events-card'>
      <Slider {...settings}>
        {data.map ((d) => (
          <div className='eventscard-items'>
            <div className='eventscard-img'>
              <img src= {d.img} alt=''className='events-image'/>
            </div>
            <div className='events-contents'>
              <p>{d.date}</p>
              <p>{d.review}</p>
              <button className='event-btn'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  )
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
    review: 'Nutrition Data Camp : at Padma Kanya College ',
  },
  
  {
    date: '01/05/2025',
    img: '/Recentevents/CAFODAT data camp.jpg',
    review: 'Nutrition Data Camp : at CAFODAT College',
  },
  // {
  //   date: '11/25/2024',
  //   img: '/Recentevents/Coverpicture.png',
  //   review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  // },
 
  // {
  //   date: '11/25/2024',
  //   img: '/Recentevents/Coverpicture.png',
  //   review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  // },

]
export default Events
