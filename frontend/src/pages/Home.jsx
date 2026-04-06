import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Suggestions from "../components/Suggestions";
import PomodoroTimer from "../components/PomodoroTimer";
import { Toaster } from "react-hot-toast";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const fetchTasks = () => {
    fetch("http://127.0.0.1:5000/tasks")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err));
  };

  const fetchSuggestions = () => {
    fetch("http://127.0.0.1:5000/suggestions")
      .then(res => res.json())
      .then(data => setSuggestions(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchTasks();
    fetchSuggestions();
  }, []);

  // Compute progress stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const progressPercent = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      
      <h1>🧠 Smart Study Planner</h1>
      
      {/* Progress Bar Header */}
      <div className="progress-container glass-panel">
        <div className="progress-text">
          <span>Overall Progress</span>
          <span>{progressPercent}% <span style={{fontSize:'0.8rem', color:'#94a3b8'}}>({completedTasks}/{totalTasks} tasks)</span></span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      <div className="grid-layout mt-20">
        <div className="glass-panel main-panel">
          <h3>Add New Task</h3>
          <TaskForm refresh={() => { fetchTasks(); fetchSuggestions(); }} />
          
          <h3 style={{marginTop: '30px'}}>My Tasks</h3>
          <TaskList tasks={tasks} refresh={() => { fetchTasks(); fetchSuggestions(); }} />
        </div>
        <div className="side-panel">
          <PomodoroTimer />
          <div className="glass-panel suggestions-container" style={{marginTop: '0'}}>
            <Suggestions suggestions={suggestions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
