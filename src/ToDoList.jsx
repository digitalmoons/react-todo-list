import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // adds new input to task list, resets in put. marks as not-completed
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks], {text: input, completed: false});
      setInput("");
    }
  }

  // updates a task to completed/not-completed
  const toggleTask = (index) => {
    const newTask = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed} : task
    )
    setTasks(newTask);
  }

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-2">
        <input 
          type="text"  
          className="border p-2 w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Task"
        />
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <span className={`cursor-pointer ${task.completed ? "line-through text-gray-500": ""}`}
            onClick={() => toggleTask(index)}
            >
              {task.text}
              </span>
              <button 
                className="text-red-500"
                onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}