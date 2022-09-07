import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Other from './components/Other';
import Hero from './components/Hero';
import ErrorPage from './components/ErrorPage';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <h1>Routing from Man</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/other"}>Other</Link>
      <hr />

      <Routes>
        {/* =============================================== */}
        <Route 
          path='/form'
          element={<Form />}/>
        {/* =============================================== */}
        <Route
          path='/'
          element={<Home />} />
        {/* =============================================== */}
        <Route
          path='/hero/:heroId'
          element={<Hero />} />
        {/* =============================================== */}
        <Route
          path='/other'
          element={
            <>
              <h2>Other Stuff</h2>
              <Home />
              <Other />
            </>
          } />
        {/* =============================================== */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              <ErrorPage />
            </main>
          }
        />
        {/* =============================================== */}
        <Route
          path='/error' 
          element={<ErrorPage />}/>
        {/* =============================================== */}

      </Routes>





    </div>
  );
}

export default App;
