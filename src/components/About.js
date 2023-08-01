import React from "react";
import Weather from "./Weather";
import Contact from "./Contact";

const About = () => {
  return (
    <div className="h-screen container about bg-gray-100">
      <div class="container-fluid">
        <h2>My Location</h2>
        <div class="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=Mississauga,+ON,+Canada&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            width="600"
            title="unique"
            height="450"
            allowfullscreen
          ></iframe>
        </div>
        <div className="Weather">{<Weather />}</div>
      </div>
      <section>
        <div className="Contact-Home">{<Contact />}</div>
      </section>
    </div>
  );
};

export default About;
