import './App.css';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import ViewOne from './components/ViewOne';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>Note 📓📓📓📓📓</h1>
      <Link to="/notes">Home</Link> 
      <Link to="/new" style={{marginLeft : "50px"}}>Create</Link> 
      <hr/>

      <Routes>
        {/* Main - all Notes */}
        <Route path='/notes' element={<Main />} />

        {/* Create */}
        <Route path='/new' element={<Create />} />

        {/* View one */}
        <Route path='/note/:id' element={<ViewOne />} />

        {/* Update */}
        <Route path='/update/:id' element={<Update />} />

        {/* Redirect */}
        <Route path='*' element={<Navigate to="/notes" replace />} />
      </Routes>
    </div>
  );
}

export default App;
