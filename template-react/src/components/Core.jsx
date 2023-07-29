import React, {useState} from 'react';

const Core = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState(``)

    const addTask = () => {
        if (newTask.trim() !== ``) {
            setTasks( [...tasks, newTask])
            setNewTask(``)
        }
    }


    const handleChange = (event) => {
        setNewTask(event.target.value)
    }

    return (
        <div>
            <h1>Todos list</h1>
            <input type="text"
            value={newTask}
            onChange={handleChange}
            placeholder={"Enter a new task"}
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((Task, index) =>(
                    <li key={index}>{Task}</li>
                ))}
            </ul>

        </div>
    );
};

export default Core;