import './App.css';
import { Routes, Route } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
import Form from './components/Form';
import Home from './components/Home';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      {/* Form component is always shown on the page */}
      <Form />
      {/* Theater stage opened*/}
      <Routes>
        {/* Act: home page */}
        <Route
          path='/'
          element={<Home />}
        />
        {/* Act: display a person's info */}
        <Route
          path='/people/:id'
          element={<People />}
        />
        {/* Act: display a planet's info */}
        <Route
          path='/planets/:id'
          element={<Planets />}
        />
        {/* Act: display a error page */}
        <Route
          path='/error'
          element={<Error />}
        />
      </Routes>
      {/* Theater stage closed*/}
    </div>
  );
}

export default App;
