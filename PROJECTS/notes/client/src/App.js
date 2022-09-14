import './App.css';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <h1>Note</h1>
      <Link to="/notes">Home</Link> 
      <Link to="/create" style={{marginLeft : "50px"}}>Create</Link> 
      <hr/>

      <Routes>
        <Route path='/notes' element={<Main />} />
        <Route path='*' element={<Navigate to="/notes" replace />} />
      </Routes>
    </div>
  );
}

export default App;
