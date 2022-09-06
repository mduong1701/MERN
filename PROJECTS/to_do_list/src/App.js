import './App.css';
import React, { useState } from 'react'
import Item from './components/Item';
import AddItem from './components/AddItem';

function App() {
// Utilize useState function to create and initilize an array varible todoList 
// having 2 Objects and a function to save a new value in the varible todoList
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
// Create a function to save a new task into toDoList
  const addItem = (newItem) => {
// Create a new object with the input value newItem and a default value of 'false' into  variable 'checked'
    const newItemObject = {
      name: newItem,
      checked: false,
    }
// Overwrite the new list into the current list
    setToDoList([...toDoList, newItemObject])
  }
// Function to switch true/false value of checked
  const isChecked = (n) => {
    setToDoList(toDoList.map((task) => 
      task.name === n 
      ? {...task, checked: !task.checked}
      : task
    ))
  }
// Delete a task using filter function
  const deleteItem = (name) => {
    setToDoList(toDoList.filter(
      (task) => task.name !== name
    ))
  }

  return (
    <div className="App">
{/* Import a component AddItem and pass a function addItem to it */}
      <AddItem addItem={addItem}/>
      <fieldset>
        <legend>List</legend>
{/* loop through toDoList to pass values and functions to a component Item */}
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
