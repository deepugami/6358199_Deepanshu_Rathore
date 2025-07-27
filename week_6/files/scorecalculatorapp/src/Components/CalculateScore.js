// src/Components/CalculateScore.js
import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore({ name, school, total, goal }) {
  // compute average
  const average = total / goal;

  return (
    <div className="score-card">
      <h2>Score Calculator</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Goal (Max Marks):</strong> {goal}</p>
      <p className="average">
        <strong>Average:</strong> {average.toFixed(2)}
      </p>
    </div>
  );
}

export default CalculateScore;
