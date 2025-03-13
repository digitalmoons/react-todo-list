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
}