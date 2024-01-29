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
        if(task.isDone === true){
            task.isDone = false;
        } else {
            task.isDone = true;
        }
        setTasks([...tasks]);
    };
    
    const deleteTask = (taskId) => {
        const index = tasks.findIndex((task) => task.id === taskId);
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
                    <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                    <button onClick={() => markTask(task.id)}></button>
                </li>
            ))}
        </div>
    );
};

export default App;
