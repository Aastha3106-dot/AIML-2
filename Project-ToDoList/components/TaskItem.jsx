import { useState } from "react";

const TaskItem = ({ task, deleteTask, toggleComplete, editTask }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.text);

  return (
    <div className="task">
      <span onClick={() => toggleComplete(task.id)}>
        {task.completed ? "✔ " : "○ "}
        {task.text}
      </span>

      <div>
        <button onClick={() => setEdit(!edit)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>

      {edit && (
        <div>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => {
              editTask(task.id, text);
              setEdit(false);
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;