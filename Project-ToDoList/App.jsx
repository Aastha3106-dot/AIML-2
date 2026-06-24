import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Dashboard from "./components/Dashboard";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (id) =>
    setTasks(tasks.filter((t) => t.id !== id));

  const toggleComplete = (id) =>
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );

  const editTask = (id, text) =>
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, text } : t))
    );

  const filtered = tasks.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar setSearch={setSearch} setDark={setDark} dark={dark} />

      <div className="container">
        <Dashboard tasks={tasks} />
        <ProgressBar tasks={tasks} />

        <TaskForm addTask={addTask} />

        <TaskList
          tasks={filtered}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      </div>
    </div>
  );
}