import React from "react";
// import Heading from "./Header";
import Footer from "./Footer";

function WeatherApp() {
  return (
    <div className="weatherApp">
     {/* <Heading /> */}
      <h1 className="app_heading">CHECK THE WEATHER CONDITION IN ANY CITY AROUND THE WORLD</h1>
      <form action="/" method="post">
        <label htmlFor="myCity">CITY NAME:</label>
        <input id="myCity" type="text" name="cityName" placeholder="Input City" />
        <button type="submit">GO</button>
      </form>
      <Footer />
    </div>
  );
}

export default WeatherApp;
