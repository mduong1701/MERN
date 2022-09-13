import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Pet from './components/Pet';
import DisplayOne from './components/DisplayOne';
import Form from './components/Form';

function App() {

  const [allPets, setAllPets] = useState([])
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets")
      .then(res => {
        console.log(res.data);
        setAllPets(res.data)
      })
      .catch(err => console.log(err))
  }, [isReady])

  return (
    <div className="App">
      <h1>PETS</h1>
      <p>
        {JSON.stringify(isReady)}
      </p>

      <Form isReady={isReady} setIsReady={setIsReady} />
      {
        allPets.map((pet) => {
          return <Pet key={pet._id} pet={pet} />
        })
      }
      {/* <DisplayOne/> */}
    </div>
  );
}

export default App;