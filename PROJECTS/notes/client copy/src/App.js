import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './components/Product';
import DisplayOne from './components/DisplayOne';
import Form from './components/Form';

function App() {

  const [allProducts, setAllProducts] = useState([])
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets")
      .then(res => {
        console.log(res.data);
        setAllProducts(res.data)
      })
      .catch(err => console.log(err))
  }, [isReady])

  return (
    <div className="App">
      <h1>PRODUCTS</h1>
      {/* <p>
        {JSON.stringify(isReady)}
      </p> */}

      <Form isReady={isReady} setIsReady={setIsReady} />
      {
        allProducts.map((product) => {
          return <Product key={product._id} product={product} />
        })
      }
      {/* <DisplayOne/> */}
    </div>
  );
}

export default App;