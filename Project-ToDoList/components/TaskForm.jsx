import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    addTask({
      id: Date.now(),
      text,
      completed: false,
    });

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        value={text}
        placeholder="Enter task..."
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default TaskForm;