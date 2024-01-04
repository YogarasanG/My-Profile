import React from 'react';
import './Footer.css';
import { FaLinkedin  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&#169; {new Date().getFullYear()}  Created by Yogarasan G</p>
          
        </div>
        <div className="footer-right">
          <p>Contact:</p>
          <p><a href="www.linkedin.com/in/yogarasang" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></p>
         
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;