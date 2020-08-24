import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  return (
    <>
    <div className="nav-top"> 
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         PRASAN KUMAR
         
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>  
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/About'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link
              to='/Resume'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Resume
            </Link>
          </li>

        
          <li className='nav-item'>
            <Link
              to='/Projects'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             Projects
            </Link>
          </li>


          <li className='nav-item'>
            <Link
              to='/ContactUs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             ContactUs
            </Link>
          </li>
         


        </ul>
      </nav>
      </div>
    </>
  );
}

export default Navbar;
