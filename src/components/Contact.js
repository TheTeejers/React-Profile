import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <div className="contactInfo">
          <div className="alert">YOUR MESSAGE HAS BEEN SENT</div>
          <li>EMAIL:<a className='mailLink' href="mailto:tjcancode@gmail.com?subject=I%20saw%20your%20website%20and%20would%20like%20to%20chat!">TJCANCODE@GMAIL.COM</a></li>
          <li>PHONE NUMBER: <a href="tel:1-512-826-6923">512.826.6923</a></li>

          <form id='contactForm' method='post' enctype='text/plain'>
            <input id='name' type='text' name='name' placeholder='Name (required)' size='50' required/><br/>

            <input id='company' type='text' name='company' placeholder='Company' size='50'/><br/>

            <input id='email' type='email' name='email' placeholder='Email (required)' size='50' required/><br/>

            <input id='phoneNumber' type='text' name='phoneNumber' placeholder='Phone Number' size='50'/><br/>

            <textarea id='message' name='message' rows='10' placeholder='Type your message here' required cols='100'></textarea><br/>

            <input className='contactSubmitButton' type='submit' value='Send Message'/>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
