import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="cuadro">
      <form onSubmit={addTask} className="formulario">
        <input
          type="texto"
          placeholder="agrega tu tareita..."
          value={task}
          onChange={handleChange}
        />
        <button type="listin">Listo</button>
      </form>

      <div className="lista de tareas">
        {tasks.map((item, index) => (
          <div key={index} className="tareitas">
            <span>{item}</span>
            <button onClick={() => deleteTask(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
