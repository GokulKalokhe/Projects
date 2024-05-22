import React from "react";
import "../Css/Home.css";
import wediinng from "../img/wedding2.jpg";
import Bday from "../img/birthday2.jpg";
import Fassion from "../img/fashion2.jpg";
import meating from "../img/meeting2.jpg";


const Home = () => {
  const viwefun = () =>{
    alert("All about Event");
  }
  return (
    <div>
    
      <div className="whatwo">
        <div className="what-lable">What we organize</div> <hr />
        <div className="what-lable">
          <img id="Event-img" src={wediinng} alt="img not found" />
          <div id="Event-discription">
            <h3 id="event-title">Wedding</h3>
            <p id="event-about">
              The most important day in a couple's life. Guaranteeing
              personalized solutions and flawless execution, our venues provide
              the perfect location for your special day.
            </p>
            <button id="view-events" onClick={viwefun}>View Events</button>
          </div>
        </div>
        <hr />
        <div className="what-lable">
          <img id="Event-img" src={Bday} alt="img not found" />
          <div id="Event-discription">
            <h3 id="event-title">Birthday</h3>
            <p id="event-about">
              Whether an all-day or the ultimate extravaganza that lasts well
              into the wee hours, our Urban Events team is here to make sure all
              your birthday party wishes come true so you can kick back, drink
              up and enjoy your special day!
            </p>
            <button id="view-events" onClick={viwefun}>View Events</button>
          </div>
        </div>
        <hr />{" "}
        <div className="what-lable">
          <img id="Event-img" src={Fassion} alt="img not found" />
          <div id="Event-discription">
            <h3 id="event-title">Fashion</h3>
            <p id="event-about">
              Fast becoming to go-to location for fashion events, PR gatherings
              and product launches, The Urban Purveyor Group venues provide you
              with choice and quality in premium locations for all your event
              needs.
            </p>
            <button id="view-events" onClick={viwefun}>View Events</button>
          </div>
        </div>
        <hr />{" "}
        <div className="what-lable">
          <img id="Event-img" src={meating} alt="img not found" />
          <div id="Event-discription">
            <h3 id="event-title">Meeting</h3>
            <p id="event-about">
              From formal, to not-so-formal, our flexible event spaces can cater
              to your every need for meetings and conferences large or small,
              and our dedicated event team can assist with all aspects of your
              event planning.
            </p>
            <button id="view-events" onClick={viwefun}>View Events</button>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Home;
