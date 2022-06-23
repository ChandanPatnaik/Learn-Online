import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='co-left'>
        <h3>Let's start learning</h3>
      </div>
      <div className='co-right'>
        <form>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Phone' />
          <button className='button s-btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact