
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[name, setName] = useState("")
  return (
    <div>
        
        <label htmlFor="ip">Enter your name: </label><br/>
      <input onChange={(e) => {
        setName(e.target.value)
      }} type="text" id="ip" />


    {name && <p>Hello {name}!</p>}

    </div>
  )
}

export default App
