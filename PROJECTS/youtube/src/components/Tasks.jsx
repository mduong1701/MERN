import Task from './Task'

const Tasks = ({tasks, onDelete}) => {
    return (
        <>
            {tasks.map( (task) => (
                <Task key={task.id} task={task} onDelete={() => onDelete(task.id)}/>
            ))}
        </>
    )
}

export default Tasks