import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>©Copyright 2020 by Marcos Riani</p>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/marcosriani/' target='_blank'>
          <img
            src='./social-media-icons/linkedin.png'
            alt='Linkedin'
            className='linkedin'
          />
        </a>
        <a href='https://github.com/marcosriani' target='_blank'>
          <img
            src='./social-media-icons/github.png'
            alt='GitHub'
            className='github'
          />
        </a>
        <a href='https://twitter.com/marcos_riani' target='_blank'>
          <img
            src='./social-media-icons/twitter.png'
            alt='Twitter'
            className='twitter'
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
