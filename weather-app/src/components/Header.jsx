import React from "react";
import { Link } from 'react-router-dom';

function Heading() {

  return (
    <div className="top_container">
      <nav className="navbar navbar-expand-lg bg-none">
      <div className="container-fluid">
          <a className="navbar-brand nav-pic" href="/"> <img className="ppic" src="images/profpic.png" alt="nav pic" /> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
              {/* <Link to="/AboutMe">About us</Link> */}
                <Link to="/AboutMe" className="nav-link">About Me </Link>
                {/* <a className="nav-link" href="/AboutMe">About Me</a> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <img className="t_class" src="images/cloudy-day.png" alt="cloud-img" />
      <h1>Stay Ahead of the Weather with WeatherApp</h1>
      <Link to="/WeatherApp">
      <button type="button" className="btn btn-outline-primary weather-btn">Weather App</button>
      </Link>
      <img className="mountain-pic" src="images/mountain-2.png" alt="mountain-img" />
    </div>
  );
}

export default Heading;
