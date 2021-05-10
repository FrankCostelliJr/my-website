import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';


const ContactForm = () => {
  return (
  <>
    <Navbar />
      <br />
      <div className="container">
        <h1>Contact Me</h1>
        <h6>Questions, job offers, or just say hello!</h6>
        <div className="info-box">
          <form action="https://formspree.io/f/mqkgnevo"
                method="Post">
            <div class="form-group">
              <label for="user-name">Name:</label>
              <input type="text" id='user-name' className='form-control' name='name' placeholder='Name' />
            </div>
            <div class="form-group">
              <label for="email">E-Mail</label>
              <input type="email" id='user-email' class="form-control" name='name' placeholder="E-Mail"></input>
            </div>
            <div class="form-group">
              <label for="Message">Message</label>
              <textarea type="text" id='user-message' name='message' class="form-control" placeholder="Message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="info-box">
          <h6>Follow me on social media!</h6>
        </div>
      </div>
      <Footer />
  </>
  );
};

export default ContactForm;
