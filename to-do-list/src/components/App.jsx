import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [itemsList, setItemsList] = useState([]);

  function handleClick() {
    setItemsList(prevItems => {
      return [...prevItems, item];
    });
    setItem("");
  }

  function handleChange(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsList.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
