import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState} from 'react'

function App() {
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

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 
      ? <Tasks tasks = {tasks} onDelete={deleteTask}/>
      : 'No Tasks to show'}
    </div>
  );
}

export default App;
