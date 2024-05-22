import React from "react";
import "../Css/createevent.css";




const Createevent = () => {
const data={
  title:"",
  discription:"",
  sartdate:"",
  enddate:"",
  cost:null,
  location:''
}
 

const getdata = (data) =>{
  data.title=document.getElementById('input1').value;
  data.discription=document.getElementById('input2').value;
  data.sartdate=document.getElementById('input3').value;
  data.enddate=document.getElementById('input4').value;
  data.cost=document.getElementById('input5').value;
  data.location=document.getElementById('input6').value;


  console.log(data); 

}

  return (
    
    <div id='createclss'>
 
    <div className="creteeventcomp">
      <h1 id="createventlab">Create Event Form</h1><hr/>
      <div className="cont" >
    
        <label className="evnlable">Title:</label>
        <input type="text" className="cretetitle"  id="input1"/>
      </div>
      <div className="cont">
       
        <label className="evnlable">Discription:</label>
        <input type="text" className="cretetitle"  id="input2"/>
      </div>
      <div className="cont">
    
        <label className="evnlable">Start date:</label>
        <input type="date" className="cretetitle"  id="input3"/>
      </div>
      <div className="cont">
       
        <label className="evnlable">End date:</label>
        <input type="date" className="cretetitle"  id="input4"/>
      </div>
      <div className="cont">
     
        <label className="evnlable">Cost:</label>
        <input type="number" className="cretetitle" id="input5" />
      </div>
      <div className="cont">
        <label className="evnlable">Location:</label>
        <select className="cretetitle" id="input6"> 
          <option id="opt">Ananas Bar, The Rocks 18 wosh Street</option>
          <option id="opt">Munich Brauhaus South Wharf, 45 South Wharf Promenade</option>
          <option id="opt">Ananas Bar & Brasserie, The Rocks 18 Argyle Street</option>
          <option id="opt">
            UrbanXchange Private Dining Room, The Rocks 12 Argyle Street
          </option>
        </select>
      </div>
      <button id="creevnbtn" type="submit" onClick={getdata}>Create Event</button>
    </div>
  
    </div>);
};

export default Createevent;
