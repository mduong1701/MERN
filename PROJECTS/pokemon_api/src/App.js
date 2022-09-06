import './App.css';
import React, { useState } from 'react'

function App() {

  const [pokemons, setPokemons] = useState([]);

  const processPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        return response.json();
      }).then(response => {
        setPokemons(response.results);
        console.log(response.results);
      }).catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <p>Hi Man</p>
      <button onClick={processPokemons}>Show me Pokemons!</button>
      <ul>
          {
            pokemons.map((pokemon, i) => {
              return (<li key={i}>{pokemon.name}</li>)
            })
          }
      </ul>
    </div>
  );
}

export default App;
