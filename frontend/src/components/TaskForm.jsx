import React, { useState } from "react";
import toast from "react-hot-toast";

function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !deadline.trim()) {
      toast.error("Please fill in both fields!");
      return;
    }

    fetch("http://127.0.0.1:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, deadline })
    }).then(() => {
      setTitle("");
      setDeadline("");
      toast.success("Task Added successfully!");
      refresh();
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        className="input-field"
        value={title}
        placeholder="What do you need to study?" 
        onChange={e => setTitle(e.target.value)} 
      />
      <input 
        className="input-field"
        type="date"
        value={deadline}
        onChange={e => setDeadline(e.target.value)} 
      />
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;
