import React from "react";

import "../Css/login.css";




const Login = () => {
  let Data={
    username:"",
    password:""
  }
  function getData(){
   Data.password=document.getElementById("logforminpu1").value;
   Data.username=document.getElementById("logforminpu2").value;
    alert(Data.username+Data.password);

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
        <h1 id="formhead">Login</h1>
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
        <div id="formbtn">
          <button type="submit" id="subbtn" onClick={getData}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

  export default Login;
