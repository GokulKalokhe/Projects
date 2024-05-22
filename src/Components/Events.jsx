import React from "react";


import "../Css/Home.css";
import joes from "../img/bdayevent.jpg";
import dress from "../img/fashevent.jpg";
import aniv2 from "../img/wedding-2595862_1920.jpg";
import meating from "../img/meeting2.jpg";


const Home = () => {
  const Dtailsbtn = () => {
alert("Here is details of event");
  };
  return (
    <div>
 
      <div className="whatwo">
        <div className="what-lable">Whats on</div> <hr />
        <div className="what-lable">
          <img id="Event-img" src={joes} alt="img not found" />
          <div id="Event-discription">
            <h3 id="event-title">Joe's 21st</h3>
            <h3 id="evndate">28/may/2024</h3>
            <p id="venueadd">
              UrbanXchange Private Dining Room, The Rocks 12 Argyle Street
            </p>
            <p id="event-about">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. When an unknown printer took a galley of type and
              scrambled it to make a type specimen book.    Lorem Ipsum is simply dummy text of the printing and typesetting
          
            </p>
            <button id="view-events" onClick={Dtailsbtn}>
              View Details
            </button>
          </div>
        </div>
        <hr />
        <div className="what-lable">
          <img id="Event-img" src={dress} alt="img not found" />
          <div id="Event-discription">
            <h3 id="event-title">Dress to Impress</h3>
            <h3 id="evndate">4/june/2024</h3>
            <p id="venueadd">
              Ananas Bar & Brasserie, The Rocks 18 Argyle Street
            </p>
            <p id="event-about">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. When an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <button id="view-events" onClick={Dtailsbtn}>
              View Details
            </button>
          </div>
        </div>
        <hr />
        <div className="what-lable">
          <img id="Event-img" src={aniv2 } alt="img not found" />
          <div id="Event-discription">
            <h3 id="event-title">Our 2nd Anniversary</h3>
            <h3 id="evndate">24/june/2024</h3>
            <p id="venueadd">
              Munich Brauhaus South Wharf, 45 South Wharf Promenade
            </p>
            <p id="event-about">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. When an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <button id="view-events" onClick={Dtailsbtn}>
              View Details
            </button>
          </div>
        </div>
        <hr />
        <div className="what-lable">
          <img id="Event-img" src={meating} alt="img not found" />
          <div id="Event-discription">
            <h3 id="event-title">Career Talk</h3>
            <h3 id="evndate">20/june/2024</h3>
            <p id="venueadd">
              UrbanXchange Private Dining Room, The Rocks 12 Argyle Street
            </p>
            <p id="event-about">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. When an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <button id="view-events" onClick={Dtailsbtn}>
              View Details
            </button>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Home;
