import React from 'react';
import '../Css/Footer.css';
import {Link} from "react-router-dom";
import facebooklogo from '../img/icons8-facebook-circled.gif';
import whatsapplogo from '../img/icons8-whatsapp.gif';
import instagramlogo from '../img/icons8-instagram.gif';
import twiterlogo from '../img/icons8-twitter.gif' ;

const Footer = () => {
  return (
    <div className='Footer-main'>
      <div className='footer-about'>
        <h2 id='footer-lab'><strong>E</strong>vent<strong>G</strong>enius</h2>
        <p id='footer-compname'>EventGenius, Dun Laoghaire, Co. Dublin
                        &copy; Urban Events Venue & Catering, 2024.</p>
      </div>
      <div className='footer-about'>
      <Link className='footer-links' to="/" >Home</Link>
        <Link className='footer-links' to="/events" >Events</Link>
        <Link className='footer-links' to="/locations" >Locations</Link>
        <Link className='footer-links' to="/contact" >Contact</Link>
      </div>
      <div className='footer-about'>
        <h2 id='footer-follow'>Follow Us</h2>
        <div className='socialmedia'>
      <a href='https://m.facebook.com'> <img src={facebooklogo} alt="icon not found" /> </a>     
      <a href='https://whatsapp.com'> <img src={whatsapplogo} alt="icon not found" /> </a>     
      <a href='https://instagram.com'> <img src={instagramlogo} alt="icon not found" /> </a>     
      <a href='https://twitter.com'> <img src={twiterlogo} alt="icon not found" /> </a>     
      </div>
      </div>
    </div>
    
  )
}

export default Footer
