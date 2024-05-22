import React from "react";
import "../Css/Contact.css";
import facebooklogo from "../img/icons8-facebook-circled.gif";
import whatsapplogo from "../img/icons8-whatsapp.gif";
import instagramlogo from "../img/icons8-instagram.gif";
import twiterlogo from "../img/icons8-twitter.gif";
import gitlog from "../img/github-logo.png";
import linkdinlogo from "../img/linkedin.png";
import youtubelog from "../img/youtube-logo.png";

const Contact = () => {

const sendfun = () => {
  let title =document.getElementById("txtarea").value;
  let msg =document.getElementById("txtarea2").value;
  alert(`Title:${title} \n Message:${msg}`);
}  
  return (
    <div className="contact-comp">
     
      <div className="contactliks">
      <a href="https://github.com/GokulKalokhe">
          <img src={gitlog} alt="icon not found" id="atag" />
        </a>
        <a href="https://www.linkedin.com/in/gokul-kalokhe-80174b268/">
          <img src={linkdinlogo} alt="icon not found" id="atag" />
        </a>
        <a href="https://twitter.com">
          <img src={twiterlogo} alt="icon not found" id="atag" />
        </a>
        <a href="https://m.facebook.com">
          <img src={facebooklogo} alt="icon not found" id="atag" />
        </a>
        <a href="https://whatsapp.com">
          <img src={whatsapplogo} alt="icon not found" id="atag" />
        </a>
        <a href="https://youtube.com">
          <img src={youtubelog} alt="icon not found" id="atag" />
        </a>

        <a href="https://instagram.com">
          <img src={instagramlogo} alt="icon not found" id="atag" />
        </a>
      </div>

      <div className="msgfild">
<h3 id="msg-lab">Title</h3>
<textarea id="txtarea" placeholder="Enter the Title"></textarea>
<h3 id="msg-lab">Message</h3>
<textarea id="txtarea2" placeholder="Enter the Message"></textarea>
<div className="btndiv"><button id="send-btn" onClick={sendfun}>Send</button></div> 
 </div>
    
    </div>
  );
};

export default Contact;
