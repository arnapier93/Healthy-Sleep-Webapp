import React from 'react';

const TimerControl = ({ xHours, yHours, zHours, onXChange, onYChange, onZChange }) => {
  return (
    <div>
      <h3>Set Timer Durations:</h3>
      <label>White Noise Duration (x): 
        <input type="number" value={xHours} onChange={(e) => onXChange(Number(e.target.value))} />
      </label>
      <br />
      <label>Black Screen Duration (y): 
        <input type="number" value={yHours} onChange={(e) => onYChange(Number(e.target.value))} />
      </label>
      <br />
      <label>Wake Up Sound Duration (z): 
        <input type="number" value={zHours} onChange={(e) => onZChange(Number(e.target.value))} />
      </label>
    </div>
  );
};

export default TimerControl;
