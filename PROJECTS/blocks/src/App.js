import React from 'react';
import mystyles from './Components/myStyle.module.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';


function App() {
  return (
    <div className={mystyles.app}>
      <Header />
      <Navigation />
      <Main></Main>
    </div>
  );
}

export default App;



