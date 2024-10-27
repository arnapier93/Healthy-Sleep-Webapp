import React, { useState } from 'react';
import '../App.css'; // Adjust this path if needed

const SleepRoutineManager = () => {
  // States for TimePickers and other inputs
  const [alarmTime, setAlarmTime] = useState('');
  const [sunriseTime, setSunriseTime] = useState('');
  const [fallAsleepHours, setFallAsleepHours] = useState(0);
  const [fallAsleepMinutes, setFallAsleepMinutes] = useState(0);
  const [wakeUpHours, setWakeUpHours] = useState(0);
  const [wakeUpMinutes, setWakeUpMinutes] = useState(0);
  const [fallAsleepSound, setFallAsleepSound] = useState('static');
  const [wakeUpSound, setWakeUpSound] = useState('chimes');

  // Handlers for time pickers and inputs
  const handleAlarmTimeChange = (e) => setAlarmTime(e.target.value);
  const handleSunriseTimeChange = (e) => setSunriseTime(e.target.value);

  // Text Input Handlers
  const handleFallAsleepHoursChange = (e) => setFallAsleepHours(e.target.value);
  const handleFallAsleepMinutesChange = (e) => setFallAsleepMinutes(e.target.value);
  const handleWakeUpHoursChange = (e) => setWakeUpHours(e.target.value);
  const handleWakeUpMinutesChange = (e) => setWakeUpMinutes(e.target.value);

  // Sound Dropdown Handlers
  const handleFallAsleepSoundChange = (e) => setFallAsleepSound(e.target.value);
  const handleWakeUpSoundChange = (e) => setWakeUpSound(e.target.value);

  return (
    <div className="container">
      <h2>Set Your Sleep Routine</h2>

      {/* Row 1: Alarm Time and Fall Asleep Sounds */}
      <div className="settings-row">
        <div className="time-picker-container">
          <label>Alarm Time:</label>
          <input type="time" value={alarmTime} onChange={handleAlarmTimeChange} />
        </div>

        <div className="sound-box">
          <h3>Fall Asleep Sounds</h3>
          <div className="sound-settings">
            <select value={fallAsleepSound} onChange={handleFallAsleepSoundChange}>
              <option value="static">Static</option>
              <option value="laundry">Laundry</option>
              <option value="waves">Waves</option>
            </select>

            {/* Hour and Minute Spinners */}
            <div className="time-wheels">
              <label>Hours:</label>
              <input
                type="number"
                value={fallAsleepHours}
                onChange={handleFallAsleepHoursChange}
                min="0"
                max="12"
              />
              <label>Minutes:</label>
              <input
                type="number"
                value={fallAsleepMinutes}
                onChange={handleFallAsleepMinutesChange}
                min="0"
                max="59"
              />
            </div>
          </div>
          <button onClick={() => alert('Connect to Spotify/Apple Music for Fall Asleep Sounds')}>
            Connect to Spotify/Apple Music
          </button>
        </div>
      </div>

      {/* Row 2: Sunrise Start Time and Wake Up Sounds */}
      <div className="settings-row">
        <div className="time-picker-container">
          <label>Sunrise Start Time:</label>
          <input type="time" value={sunriseTime} onChange={handleSunriseTimeChange} />
        </div>

        <div className="sound-box">
          <h3>Wake Up Sounds</h3>
          <div className="sound-settings">
            <select value={wakeUpSound} onChange={handleWakeUpSoundChange}>
              <option value="chimes">Chimes</option>
              <option value="birds">Birds</option>
              <option value="morning-tune">Morning Tune</option>
            </select>

            {/* Hour and Minute Spinners */}
            <div className="time-wheels">
              <label>Hours:</label>
              <input
                type="number"
                value={wakeUpHours}
                onChange={handleWakeUpHoursChange}
                min="0"
                max="12"
              />
              <label>Minutes:</label>
              <input
                type="number"
                value={wakeUpMinutes}
                onChange={handleWakeUpMinutesChange}
                min="0"
                max="59"
              />
            </div>
          </div>
          <button onClick={() => alert('Connect to Spotify/Apple Music for Wake Up Sounds')}>
            Connect to Spotify/Apple Music
          </button>
        </div>
      </div>
    </div>
  );
};

export default SleepRoutineManager;
