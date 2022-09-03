import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Food Shopping',
        day: 'Feb 5th at 12:00 pm',
        reminder: false,
    },
    {
        id: 2,
        text: 'Food Shopping',
        day: 'Feb 5th at 12:00 pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 12:00 pm',
        reminder: false,
    },
])
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id
    ? {...task, reminder: !task.reminder}
    : task
    ));
  }

  return (
    <div className="container">
      <Header 
      onAdd={
        () => setShowAddTask(!showAddTask)
      }
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 
      ? <Tasks 
      tasks = {tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
      : 'No Tasks to show'}
    </div>
  );
}

export default App;
