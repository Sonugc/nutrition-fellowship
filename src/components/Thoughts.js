import React from 'react';
import './Thoughts.css';

function Thoughts() {
  return (
    <div className='thoughts-container'>
      <p className='thoughts-top1'>PLACE YOUR THOUGHTS</p>
      <p className='thoughts-top2'>
        We would love to hear feedbacks and questions from your end.
      </p>
      <div className='thoughts-form'>
        <div className='thoughts-input'>
          <input 
            type='text'
            placeholder='First Name'
          />
        </div>
        <div className='thoughts-input'>
          <input 
            type='text'
            placeholder='Last Name'
          />
        </div>
        <div className='thoughts-input'>
          <input 
            type='email'
            placeholder='Email Address'
          />
        </div>
        <div className='thoughts-input'>
          <textarea 
            className='thoughts-input-field'
            placeholder='Your Thoughts'
          />
        </div>
        <div className='submit'>
          <button className='thoughts-submit'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Thoughts;
