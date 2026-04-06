import React from "react";

function Suggestions({ suggestions }) {
  if (!suggestions || suggestions.length === 0) {
    return <div className="suggestion-item">Ready to suggest tasks based on your activity.</div>;
  }

  return (
    <div>
      <h3>AI Guidance</h3>
      <div>
        {suggestions.map((s, i) => (
          <div className="suggestion-item" key={i}>{s}</div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
