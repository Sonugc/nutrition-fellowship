import React from 'react';
import './Thoughts.css';
import Swal from 'sweetalert2'


function Thoughts() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6649cfe5-e72b-4818-aa36-de58ef34225d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thank you!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };


  return (
    <div className='thoughts-container'>
      <p className='thoughts-top1'>PLACE YOUR THOUGHTS</p>
      <p className='thoughts-top2'>
        We would love to hear feedbacks and questions from your end.
      </p>
      <form onSubmit={onSubmit}>
      <div className='thoughts-form'>
        <div className='thoughts-input'>
          <input
            type='text'
            placeholder='Full Name' name='name'
         required/>
        </div>

        <div className='thoughts-input'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
          required/>
        </div>
        <div className='thoughts-input'>
          <textarea
            className='thoughts-input-field'
            placeholder='Your Thoughts' name='message'
          required/>
        </div>
        <div className='submit'>
          <button className='thoughts-submit'>
            Submit
          </button>
        </div>
      </div>
      </form>
    </div>
  );
}


export default Thoughts;




