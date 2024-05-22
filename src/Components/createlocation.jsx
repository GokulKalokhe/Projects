import React from "react";
import "../Css/createevent.css";


const Createevent = () => {
    let Locationdata={
        name:"",
        address:"",
        magename:"",
        manageemail:"",
        managenumber:null,
        maxcapacity:null,
        locationtype:"",
        SeatingAvailable:"",
        Facilities:"",
        url:"",
        attachfile:null
      }
function getloction(Locationdata){
    Locationdata.name=document.getElementById('input1').value;
    Locationdata.address=document.getElementById('input2').value;
    Locationdata.magename=document.getElementById('input3').value;
    Locationdata.manageemail=document.getElementById('input4').value;
    Locationdata.managenumber=document.getElementById('input5').value;
    Locationdata.maxcapacity=document.getElementById('input6').value;
    Locationdata.locationtype=document.getElementById('input7').value;
    Locationdata.SeatingAvailable=document.getElementById('input8').value;
    Locationdata.Facilities=document.getElementById('input9').value;
    Locationdata.url=document.getElementById('input10').value;
    Locationdata.attachfile=document.getElementById('input11').value;
  
  
    console.log(Locationdata); 
}

  return (
    <div id="createclss">
      
      <div className="creteeventcomp">
        <h1 id="createventlab">Create Location Form</h1>
        <hr />
        <div className="cont">
          <label className="evnlable">Location Name:</label>
          <input type="text" className="cretetitle" id="input1" />
        </div>
        <div className="cont">
          <label className="evnlable">Address:</label>
          <input type="text" className="cretetitle" id="input2" />
        </div>
        <div className="cont">
          <label className="evnlable">Managers Full Name:</label>
          <input type="text" className="cretetitle" id="input3" />
        </div>
        <div className="cont">
          <label className="evnlable">Manages Email:</label>
          <input type="email" className="cretetitle" id="input4" />
        </div>
        <div className="cont">
          <label className="evnlable">Manages Number:</label>
          <input type="number" className="cretetitle" id="input5" />
        </div>
        <div className="cont">
          <label className="evnlable">Max Capacity:</label>
          <input type="number" className="cretetitle" id="input6" />
        </div>
        <div className="cont">
          <label className="evnlable">Location Type:</label>
          <select className="cretetitle" id="input7" placeholder="Choose loction type">
            <option id="opt">Indoor</option>
            <option id="opt">Outdoor</option>
            <option id="opt">Both</option>
          </select>
        </div>
        <div className="cont">
          <label className="evnlable">Seating Available:</label>
          <select className="cretetitle" id="input8">
            <option id="opt">Yes</option>
            <option id="opt">No</option>
          </select>
        </div>
        <div className="cont">
          <label className="evnlable">Facilities:</label>
          <select className="cretetitle" id="input9">
            <option id="opt">Sound Room</option>
            <option id="opt">Big Screen Room</option>
            <option id="opt">Bar</option>
            <option id="opt">Disabled Access Toilets</option>
          </select>
        </div>
        <div className="cont">
          <label className="evnlable">Url:</label>
          <input type="Url" className="cretetitle" id="input10" />
        </div>
        <div className="cont">
          <label className="evnlable">Attach File:</label>
          <input type="file" className="cretetitle" id="input11" />
        </div>

        <button id="creevnbtn" type="submit" onClick={getloction}>
          Create Location
        </button>
      </div>
   
    </div>
  );
};

export default Createevent;
