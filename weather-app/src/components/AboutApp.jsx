import React from "react";

function AboutApp() {
  return (
    <section id="cta">
      <h5>
      This WeatherApp is a reliable weather companion, providing 
      real-time weather data for any place on the planet. It's never 
      been easier to remain informed about weather conditions in your 
      favorite cities or destinations you want to visit, through a 
      simple and intuitive format. WeatherApp is the app that keeps 
      you informed no matter where you are or where you are going, 
      so you can embrace every day with confidence. Checkout 
      WeatherWise now to witness the difference for yourself.<br />   
      Checkout the codes in the GitHub repository 
      <a className="text-outline-dark" style={{ textDecoration: "none" }} href="https://github.com/lasc01/User-Friendly_To-Do_List_Application">here.</a>
      </h5>
      <a type="button" className="btn btn btn-dark" href="./WeatherApp.jsx" role="button">WeatherApp</a>  
    </section>
  );
}

export default AboutApp;
