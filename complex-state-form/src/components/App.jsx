import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateChange(event){
    const {name, value} = event.target;
    setContact((prevValue)=>{
      // shortening the codes below using spread operator
      return {
        ...prevValue,
        [name]: value
      };


      // if(name === "fName"){
      //   return{
      //     fName: value,
      //     lName: prevValue.lName,
      //     email: prevValue.email
      //   };
      //  } else if(name === "lName"){
      //     return{
      //       fName: prevValue.fName,
      //       lName: value,
      //       email: prevValue.email
      //     };
      //   } else if(name === "email"){
      //     return{
      //       fName: prevValue.fName,
      //       lName: prevValue.lName,
      //       email: value
      //     }
      // }
    })

  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={updateChange} name="fName" placeholder="First Name" value={contact.fName}/>
        <input onChange={updateChange} name="lName" placeholder="Last Name" value={contact.lName}/>
        <input onChange={updateChange} name="email" placeholder="Email" value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
