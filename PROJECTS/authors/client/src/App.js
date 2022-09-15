import './App.css';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
// import ViewOne from './components/ViewOne';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      {/* <Link to="/">Home</Link>  */}
      {/* <Link to="/new">Add an author</Link>  */}
      
      <Routes>
        {/* Main - all Notes */}
        <Route path='/' element={<Main />} />

        {/* Create */}
        <Route path='/new' element={<Create />} />

        {/* View one */}
        {/* <Route path='/author/:id' element={<ViewOne />} /> */}

        {/* Update */}
        <Route path='/edit/:id' element={<Update />} />

        {/* Redirect */}
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
