import React from 'react';

const BrightnessControl = ({ brightness, onBrightnessChange }) => {
  const handleSliderChange = (e) => {
    onBrightnessChange(e.target.value);
  };

  return (
    <div>
      <h3>Adjust Brightness:</h3>
      <input type="range" min="0" max="100" value={brightness} onChange={handleSliderChange} />
      <span>{brightness}%</span>
    </div>
  );
};

export default BrightnessControl;
