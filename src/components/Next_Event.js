import React from 'react';
import './Next_event.css';

const Event = ({ name, date, description }) => {
  return (
    <div className="nextevent-content">
      <p className="event-name"><b>{name}</b></p>
      <p className="event-date">Date: {date}</p>
      <p className="event-description">
        {description}
      </p>
      <button className="view-details-btn">View Details</button>
      {/* <span className="underline"></span> */}
    </div>
  );
};

const Next_Event = () => {
  const events = [
    {
      name: 'Nutrition Data Camps',
      date: '2025-monthly',
      description: 'Nutrition data camps will be conducted every month among the students and professionals.'
    },
    {
      name: 'Orientation for students',
      date: '2025-monthly',
      description: 'Orientation programs on various technical skills will be conducted among the students.'
    },
    // {
    //   name: 'Event 3',
    //   date: '2024/12/25',
    //   description: 'Description for Event 3'
    // },
    // {
    //   name: 'Event 4',
    //   date: '2024/12/30',
    //   description: 'Description for Event 4'
    // }
  ];

  return (
    <div className="nextevent-container">
      <p className='nextevent-top'>Upcoming Events</p>
      {events.map((event, index) => (
        <Event 
          key={index} 
          name={event.name} 
          date={event.date} 
          description={event.description} 
        />
      ))}
    </div>
  );
};

export default Next_Event;

