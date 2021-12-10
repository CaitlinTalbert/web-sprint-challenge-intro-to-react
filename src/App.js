//dependencies 
import React, { useState, useEffect }from 'react';
import axios from 'axios'; 
//import { API_URL, API_KEY } from ""; 

//Components 
import Character from "./components/Character.js"; 


//Stylesheets 
import './App.css';



const App = () => {
  const [characterData, setCharacterData] = useState([])

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then((res) => {
      console.log(res.data)
      setCharacterData(res.data);
    })
    //.catch((err) => {
    //  console.error(err); 
    //})
  }, []);

  //console.log(characterData)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
    <article>
      {characterData.map((character) => (
        <Character key={"person" + character.id} character={character} />))}
  </article>
  </div>
  )
}; 


export default App;
