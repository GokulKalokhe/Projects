import React from "react";

import "../Css/login.css";




const signup = () => {
  let Data={
    username:"",
    password:"",
    conformpass:""
  }
  function getData(){
   Data.username=document.getElementById("logforminpu1").value;
   Data.password=document.getElementById("logforminpu2").value;
   Data.confirmpass=document.getElementById("logforminpu3").value;
    // console.log(Data);

    if( Data.password=== Data.confirmpass){
        console.log(Data);
    }else{
        alert("password must be same");
    }
   }

  // let data=Data;
// let getata = (data) =>{
// data.username=document.getElementById ("logforminpu1").value;
//  data.password=document.getElementById("logforminpu2").value;
//   console.log(data);
// }
  return (
    <div className="form-div">
      <div className="login-comp">
        <h1 id="formhead">Sign up</h1>
        <hr />
        <div id="fildncomp">
          <label id="lab">Username/Email Id</label>
          <br />
          <input type="text" placeholder="Enter user id" id="logforminpu1" className="logforminpu" />
        </div>
        <div id="fildncomp">
          <label id="lab">Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            id="logforminpu2"
            className="logforminpu" 
          />
        </div>
        <div id="fildncomp">
          <label id="lab">Conform Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            id="logforminpu3"
            className="logforminpu" 
          />
        </div>
        <div id="formbtn">
          <button type="submit" id="subbtn" onClick={getData}>
        Register
          </button>
        </div>
        <div id="err"></div>
      </div>
    </div>
  );
};

  export default signup;
