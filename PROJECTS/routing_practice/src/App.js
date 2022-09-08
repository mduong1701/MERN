import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import Number from './components/Number';
import Color from './components/Color';

function App() {

  return (

    <div className="App">
      <Routes>
        {/* ================================ */}
        <Route
          path="/home"
          element={<p>Welcome</p>}
        />
        {/* ================================ */}
        <Route
          path="/:number"
          element={<Number/>}
        />
        {/* ================================ */}
        <Route
          path="/:word/:color/:bg"
          element={<Color/>}
        />
      </Routes>
    </div>
  );
}

export default App;
