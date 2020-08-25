import React from 'react'
import './Contact.scss';
import axios from 'axios'

import Form from './Form'

function ContactUs() {
  return (
    <>
    <div>
      <h1 className="contactus">contact Us</h1>
    </div>

     <div className="container">
     <Form/>
     </div>

     </>

  )
}

export default ContactUs
