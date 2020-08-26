import React from 'react'
import './Contact.scss';

import Form from './Form'
import SocialMedia from '../../Socialmedia/SocialMedia';

function ContactUs() {
  return (
    <>
    <div>
      <h1 className="contactus">contact Us</h1>
    </div>

    <div className="container">
    <SocialMedia/>
    </div>

     <div className="container">
     <Form/>
     </div>

     </>

  )
}

export default ContactUs
