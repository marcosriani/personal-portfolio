import React from 'react';

// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faTwitter,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {
  return (
    <section className='contact-me-section'>
      <div className='contact-me-header'>
        <h2>Contact Me</h2>
        <h3>I am available for hire and open to any ideas of cooperation.</h3>
      </div>
      <div className='contact-me-content'>
        <p>Email:</p>
        <div>
          <FontAwesomeIcon icon={faEnvelopeSquare} className='icon-component' />
        </div>
        <p className='contact-detail'>marcosriani@hotmail.com</p>
        <p>LinkedIn:</p>
        <div>
          <FontAwesomeIcon icon={faLinkedinIn} className='icon-component' />
        </div>
        <p className='contact-detail'>marcosriani</p>
        <p>Github:</p>
        <div>
          <FontAwesomeIcon icon={faGithub} className='icon-component' />
        </div>
        <p className='contact-detail'> marcosriani</p>
        <p>Facebook:</p>
        <div>
          <FontAwesomeIcon icon={faFacebookF} className='icon-component' />
        </div>
        <p className='contact-detail'>marcosriani</p>
        <p>Twitter: </p>
        <div>
          <FontAwesomeIcon icon={faTwitter} className='icon-component' />
        </div>
        <p className='contact-detail'>marcos_riani</p>
      </div>
    </section>
  );
};

export default ContactMe;
