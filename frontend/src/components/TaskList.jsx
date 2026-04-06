import React, { useState } from "react";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";

function TaskList({ tasks, refresh }) {
  const [activeTab, setActiveTab] = useState("active");

  const completeTask = (id) => {
    fetch(`http://127.0.0.1:5000/tasks/${id}`, {
      method: "PUT"
    }).then(() => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#38bdf8', '#10b981']
      });
      toast.success("Task Completed! Awesome job!");
      refresh();
    });
  };

  const activeTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  // Logic to color code deadlines
  const getDeadlineColor = (deadlineStr) => {
    const today = new Date();
    today.setHours(0,0,0,0);
    
    // Create task deadline date explicitly treating it as local timezone to match input type="date"
    const parts = deadlineStr.split('-');
    if (parts.length !== 3) return "deadline-normal";

    const taskDate = new Date(parts[0], parts[1] - 1, parts[2]);

    const diffTime = taskDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "deadline-danger"; // Overdue
    if (diffDays === 0) return "deadline-warning"; // Today
    return "deadline-safe"; // Future
  };

  const renderTasks = (taskList) => {
    if (taskList.length === 0) {
      return (
        <div className="empty-state">
          <span>{activeTab === "active" ? "☕ You're all caught up! Time to relax." : "No completed tasks yet. Keep pushing!"}</span>
        </div>
      );
    }

    return taskList.map(task => (
      <div key={task.id} className={`task-item ${task.completed ? 'task-completed' : ''}`}>
        <div className="task-info">
          <span className="task-title">{task.title}</span>
          <span className={`task-deadline ${!task.completed ? getDeadlineColor(task.deadline) : ''}`}>
            📅 Due: {task.deadline}
          </span>
        </div>
        {!task.completed && (
          <button className="btn btn-success" onClick={() => completeTask(task.id)}>
            ✨ Done
          </button>
        )}
      </div>
    ));
  };

  return (
    <div className="task-list-container">
      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'active' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Active ({activeTasks.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'completed' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed ({completedTasks.length})
        </button>
      </div>

      <div className="task-list">
        {renderTasks(activeTab === "active" ? activeTasks : completedTasks)}
      </div>
    </div>
  );
}

export default TaskList;
