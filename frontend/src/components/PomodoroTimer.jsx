import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

function PomodoroTimer() {
  const WORK_TIME = 25 * 60; // 25 minutes
  const BREAK_TIME = 5 * 60; // 5 minutes

  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isActive, setIsActive] = useState(false);
  const [isWorkMode, setIsWorkMode] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      clearInterval(interval);
      setIsActive(false);
      
      if (isWorkMode) {
        toast.success("Time for a 5-minute break! ☕", { duration: 5000 });
        setIsWorkMode(false);
        setTimeLeft(BREAK_TIME);
      } else {
        toast.success("Break is over! Back to focus! 💪", { duration: 5000 });
        setIsWorkMode(true);
        setTimeLeft(WORK_TIME);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, isWorkMode]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setIsWorkMode(true);
    setTimeLeft(WORK_TIME);
  };

  const skipBreak = () => {
    setIsActive(false);
    setIsWorkMode(true);
    setTimeLeft(WORK_TIME);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="pomodoro-container">
      <div className="pomodoro-header">
        <h3>{isWorkMode ? "🎯 Focus Session" : "☕ Break Time"}</h3>
        <span className="pomodoro-status">{isActive ? "Running" : "Paused"}</span>
      </div>
      
      <div className={`pomodoro-display ${!isWorkMode ? "break-mode" : ""}`}>
        {formatTime(timeLeft)}
      </div>
      
      <div className="pomodoro-controls">
        <button className={`btn ${isActive ? 'btn-danger' : 'btn-primary'}`} onClick={toggleTimer}>
          {isActive ? "⏸ Pause" : "▶ Start"}
        </button>
        <button className="btn" style={{background: 'rgba(255,255,255,0.1)'}} onClick={resetTimer}>
          🔄 Reset
        </button>
        {!isWorkMode && (
          <button className="btn" style={{background: 'rgba(255,255,255,0.1)'}} onClick={skipBreak}>
            ⏭ Skip
          </button>
        )}
      </div>
    </div>
  );
}

export default PomodoroTimer;
