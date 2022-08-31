import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';


function App() {
  return (
    <div className="App">
      <MyNewComponent header={"Header Prop"}>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
      </MyNewComponent>
    </div>
  );
}

export default App;

