import './App.css';
import React, { useState } from 'react'
import Item from './components/Item';
import AddItem from './components/AddItem';

function App() {
  const [toDoList, setToDoList] = useState(
    [
      {
        name: "Do laundry",
        checked: false,
      }, 

      {
        name: "Wash dishes",
        checked: false,
      },
      
    ])

  const addItem = (newItem) => {
    const newItemObject = {
      name: newItem,
      checked: false,
    }
    setToDoList([...toDoList, newItemObject])
  }

  const isChecked = (n) => {
    setToDoList(toDoList.map((task) => 
      task.name === n 
      ? {...task, checked: !task.checked}
      : task
    ))
  }

  const deleteItem = (n) => {
    setToDoList(toDoList.filter(
      (task) => task.name !== n
    ))
  }

  return (
    <div className="App">
      <AddItem addItem={addItem}/>
      <fieldset>
        <legend>List</legend>
        {toDoList.map((item, idx) => { 
          return <Item 
          item={item} 
          key={idx} 
          isChecked={isChecked} 
          deleteItem={deleteItem}
          /> })}
      </fieldset>
    </div>
  );
}

export default App;
