import React, { Component } from 'react';

// get our fontawesome imports
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
  return (
    <section className='contact-me-section'>
      <div className='contact-me-header'>
        <h2>Contact Me</h2>
        <h3>I am available for hire and open to any ideas of cooperation.</h3>
      </div>
      <div className='contact-me-content'>
        <p>
          Email:
          <img alt='email' src='./email.png' />
          marcosriani@hotmail.com
        </p>
        <p>
          LinkedIn:
          <img alt='linkedin' src='./linkedin.png' />
          marcosriani
        </p>
        <p>
          Github:
          <img alt='github' src='./github.png' />
          marcosriani
        </p>
        <p>
          Facebook:
          <img alt='facebook' src='./facebook.png' />
          marcosriani
        </p>
        <p>Twitter:</p>
      </div>
    </section>
  );
};

export default ContactMe;
