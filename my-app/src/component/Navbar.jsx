import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";  


export const Navbar = () => {
  return (
    <nav>
        <Link to="/" className='title'>DEEPIKA VADLA</Link>
      <ul>
        <li>
          <Link to="/about"  className='about'>ABOUT</Link>
        </li>
        <li>
          <Link to="/Contact" className='contact'>CONTACT</Link>
        </li>
       
        
      </ul>
    </nav>
  );
};

