import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import "../Css/Navbar.css";
import Login from "../Components/Login";
import Register from "../Components/Signup";


const Navbar = () => {

  let [logdin , setlogdin]=useState(false);
  let [loginvisible , setloginvisible]=useState(false);
  let [registvisible , setregistvisible]=useState(false);
  
  function logintoggale() {
    // setloginvisible(!loginvisible);
   
    // setregistvisible(false);
    {logdin===true ?logdin = setlogdin(false):logdin = setlogdin(true)};
   }
  function registtoggale() {
    // setregistvisible(!registvisible);
    // setloginvisible(false);
   }
  

  return (
    <div className="main-navcomp">
      {logdin === true ? <div className="linkcont">
        <Link className="nav-links" to="/">
          Home
        </Link>
        
        <Link className="nav-links" to="/Createevent">
         CreateEvent
        </Link>
        <Link className="nav-links" to="/Createlocation">
          CreateLocation
        </Link>
        <Link className="nav-links" to="/contact">
          Contact
        </Link>

      </div> : <div className="linkcont">
        <Link className="nav-links" to="/">
          Home
        </Link>
        <Link className="nav-links" to="/events">
          Events
        </Link>
        <Link className="nav-links" to="/locations">
          Locations
        </Link>
        <Link className="nav-links" to="/contact">
          Contact
        </Link>

      </div>}
      <div className="buttoncont">
        <button id="sign-btn" type="button"onClick={registtoggale}>
          Register
        </button>
        
        <button id="login-btn" type="button" onClick={logintoggale}>
          Login
        </button>
      </div>
      {/* {loginvisible===true ?<Login/> :""};
      {registvisible===true ?<Register/> :""}; */}
      {/* {loginvisible && <Login/>}
      {registvisible && <Register/>} */}
  
      
    </div>
  );
};

export default Navbar;

