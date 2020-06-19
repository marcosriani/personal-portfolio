import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className='nav'>
        <div className='logo'>
          {/* Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
          <img className='logo-image' alt='logo' src='./logo.png' />
        </div>
        <ul className='nav-items'>
          <li>ABOUT </li>
          <li>PORTFOLIO</li>
          <li>CONTACT ME</li>
        </ul>
      </nav>
      <header>
        <div className='header-image'>
          <div className='header-content'>
            <h1>Hi, my name is Marcos Riani.</h1>
            <h2> I’m a developer based in London. </h2>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
