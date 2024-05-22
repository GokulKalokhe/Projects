import React from "react";
import "../Css/Home.css";
import location1 from "../img/urbanxchange.jpg";
import location2 from "../img/ananasbar.jpg";
import location3 from "../img/argyle.jpg";
import location4 from "../img/munich.jpg";


const Location = () => {
  const viwefun = () =>{
    alert("Location discription");
  }
  return (
    <div>
     
      <div className="whatwo">
        <div className="what-lable">Our Locations</div> <hr />
        <div className="what-lable">
          <img id="Event-img" src={location1} alt="img not found" />
          <div id="Event-discription">
            <h3 id="event-title"> UrbanXchange Private Dining Room, The Rocks 12 Argyle Street</h3>
            <p id="event-about">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquid ab ducimus molestiae facere recusandae optio impedit quasi rem iure, veritatis fugiat deserunt reiciendis quia vitae nisi vel natus soluta necessitatibus. Esse, laudantium dicta.
            </p>
            <button id="view-events" onClick={location2}>View Location</button>
          </div>
        </div>
        <hr />
        <div className="what-lable">
          <img id="Event-img" src={location2} alt="img not found" />
          <div id="Event-discription">
            <h3 id="event-title"> Ananas Bar & Brasserie, The Rocks 18 Argyle Street</h3>
            <p id="event-about">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel explicabo excepturi rem fugiat dolorum error corporis, porro magni quis saepe aperiam ratione totam blanditiis inventore nemo architecto numquam ipsum, amet recusandae facere quisquam! Earum.
            </p>
            <button id="view-events" onClick={viwefun}>View Location</button>
          </div>
        </div>
        <hr />{" "}
        <div className="what-lable">
          <img id="Event-img" src={location3} alt="img not found" />
          <div id="Event-discription">
            <h3 id="event-title"> Munich Brauhaus South Wharf, 45 South Wharf Promenade</h3>
            <p id="event-about">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore temporibus id vitae itaque fugiat magni odio officia nihil, accusamus sunt consectetur eaque quam dolorum obcaecati autem eum tempore. Debitis quae necessitatibus consequatur deleniti!
            </p>
            <button id="view-events" onClick={viwefun}>View Location</button>
          </div>
        </div>
        <hr />{" "}
        <div className="what-lable">
          <img id="Event-img" src={location4} alt="img not found" />
          <div id="Event-discription">
            <h3 id="event-title">Ananas Bar, The Rocks 18 wosh Street</h3>
            <p id="event-about">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam enim harum numquam voluptatibus eligendi? Debitis nisi commodi quaerat officiis, dolore, temporibus vero ducimus harum recusandae sit hic molestias iste eveniet aperiam unde! Atque?
            </p>
            <button id="view-events" onClick={viwefun}>View Location</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Location;
