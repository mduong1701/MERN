import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';



function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main>
      </Main>
    </div>
  );
}

export default App;


