import './App.css';
import React, { useState } from 'react'
import Item from './components/Item';
import AddItem from './components/AddItem';

function App() {
  const [toDoList, setToDoList] = useState(
    [
      "Do laundry",
      "Wash dishes",
      "Learn React",
      "Do exercise",
      "Water plants",
    ])

  const addItem = (newItem) => {
    setToDoList([...toDoList, newItem])
  }

  return (
    <div className="App">
      <AddItem addItem={addItem}/>
      <fieldset>
        <legend>List</legend>
        {toDoList.map((item, idx) => { return <Item item={item} key={idx} /> })}
      </fieldset>
    </div>
  );
}

export default App;
