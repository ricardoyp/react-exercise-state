import { useState } from "react";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (description) => {
        const task = {
            description: description,
            isDone: false,
            id: tasks.length + 1
        };
        setTasks([...tasks, task]);
    };

    const markTask = (taskId) => {
        const task = tasks.find((task) => task.id === taskId);
        task.isDone = true;
        setTasks([...tasks]);
    };
    
    const deleteTask = (taskId) => {
        const index = tasks.findIndex((task) => task._id === taskId);
        tasks.splice(index, 1);
        setTasks([...tasks]);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Añadir tarea"
                onKeyDown = {(e) => {
                    if (e.key === "Enter") {
                        addTask(e.target.value);
                        e.target.value = "";
                    }
                }}
            />
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.isDone ? <strike>{task.description}</strike> : task.description}
                </li>
            ))}
        </div>
    );
};

export default App;
