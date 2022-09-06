import './App.css';
import React, { useState } from 'react';
import axios from 'axios'
function App() {
  const [pokemons, setPokemons] = useState([])
  const fetchPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(noData => console.log("XXX", noData))
  }
  return (
    <div className="App">
      <button onClick={fetchPokemons}>Fetch Pokemons using Axios</button>
      <ul>
        {
          pokemons.map((pokemon, id) => {
            return (
              <li key={id}>{pokemon.name}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
