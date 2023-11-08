import React from "react";

function Features(){
    return <section id="features">
    <div class="row container-fluid features-con">
      
      <div class="col-lg-4 col-md-12 features-1">
        <i class="fa-solid fa-circle-check"></i>
        <h3>Easy to use.</h3>
        <p>So easy to use, just enter tasks and add.</p>
      </div>

      <div class="col-lg-4 col-md-12 features-1">
       <i class="fa-solid fa-bullseye"></i>
        <h3>Weather Condition</h3>
        <p>Discover the weather condition of any city in the world.</p>
      </div>

      <div class="col-lg-4 col-md-12 features-1">
        <i class="fa-solid fa-heart"></i>
        <h3>Friendly User Interface</h3>
        <p>Easy navigation through the web application.</p>
      </div>
    </div>

    
  </section>

}

export default Features;