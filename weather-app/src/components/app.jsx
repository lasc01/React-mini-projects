import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Heading from "./Header";
import Footer from "./Footer";
import Features from "./Features";
import AboutApp from "./AboutApp";
import Reviews from "./Reviews";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import WeatherApp from './WeatherApp';

function App(){
    return <div>
    {/* <Heading /> */}
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Heading />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/WeatherApp" element={<WeatherApp />} />
          {/* Add more routes here if needed */}
        </Routes>
        </div>
    </Router>
        <Features />
        <AboutApp />
        <Reviews />
        <Contact />
        <Footer />
    </div>
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Heading from "./Header";
// import Footer from "./Footer";
// import Features from "./Features";
// import AboutApp from "./AboutApp";
// import Reviews from "./Reviews";
// import Contact from "./Contact";
// import WeatherApp from './WeatherApp';

// function App() {
//   return (
//     <div>
//       <Router>
//         <Heading />
//         <Switch>
//           <Route exact path="/" component={Features} />
//           <Route path="/about" component={AboutApp} />
//           <Route path="/reviews" component={Reviews} />
//           <Route path="/contact" component={Contact} />
//           <Route path="/weather" component={WeatherApp} />
//         </Switch>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;
