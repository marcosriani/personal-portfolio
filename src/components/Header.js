import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <section id='header'>
      <nav className='nav'>
        <div className='logo'>
          {/* Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
          <img className='logo-image' alt='logo' src='./logo.png' />
        </div>

        <ul className='nav-items'>
          <li>
            <Link
              activeClass='active'
              spy={true}
              to='about'
              smooth={true}
              duration={1000}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              spy={true}
              to='portfolio'
              smooth={true}
              duration={1000}
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              spy={true}
              to='contact-me'
              smooth={true}
              duration={1000}
            >
              CONTACT ME
            </Link>
          </li>
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
    </section>
  );
};

export default Header;
