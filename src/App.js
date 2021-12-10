//dependencies 
import React, { useState, useEffect }from 'react';
import axios from 'axios'; 
//import { API_URL, API_KEY } from ""; 

//Components 
import Character from "./components/Character.js"; 


//Stylesheets 
import './App.css';



const App = () => {

  const [baseURL, setBaseURL] = useState("https://swapi.dev/api/people")
  const [characterData, setCharacterData] = useState([])

  useEffect(() => {
    axios.get(baseURL)
    .then((response) => {
      console.log(response.data)
      setCharacterData(response.data)
    })
  }, [])

  console.log(characterData)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <h2>{characterData.name}</h2>
      {
        characterData.map((character, index) => (
          <Character key={index} character={characterData} />
        ))
      }
    </div>
  );
}

export default App;
