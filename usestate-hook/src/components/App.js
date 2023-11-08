import React, {useState} from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  console.log(time);
  const [currentTime, newTime] = useState(time)

  function refreshTime(){
    let updatedTime = new Date().toLocaleTimeString();
    newTime(updatedTime);
  }

  setInterval(refreshTime,1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={refreshTime}>Get Time</button>
    </div>
  );
}

export default App;

