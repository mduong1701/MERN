import React, { useState } from 'react';
import './App.css';
import Box from './components/Box'
import FormBox from './components/FormBox';
// import Display from './components/Display';

function App() {

  // Create state variable for this component
  const red = {
    color: "red",
    height: "100px",
    width: "100px"
  }
  const [boxes, setBoxes] = useState([red]);
  const addBox = (newBox) => {
    setBoxes([...boxes, newBox])
  }
  return (
    <div className="App">
      Hi Michael
      {/* ============================ */}
      <FormBox addBox={addBox}/>
      {/* ============================ */}
      <div className="Boxes">
      {
        boxes.map((box, i) => {
          return <Box box={box} key={i}/>
        })
      }
      </div>
    </div>
  );
}

export default App;
