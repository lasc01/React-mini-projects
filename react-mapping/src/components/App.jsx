import React from "react";
import Dico from "./dico";
import emojipedia from "../emojipedia";

function createDico(emojiDico){
  return (
    <div>
      <Dico 
      key={emojiDico.id}
      emoji={emojiDico.emoji}
      name={emojiDico.name}
      meaning={emojiDico.meaning}
      />
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createDico)}
      </dl>
    </div>
  );
}

export default App;
