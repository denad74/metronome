import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import click from "./click.mp3";

const CLICK = new Audio(click);
function App() {
  const [bpm, setBpm] = useState("100");
  const [playing, setPlaying] = useState(false);
  const timer = useRef();

  useEffect(() => {
    const play = () => CLICK.play();

    if (playing) {
      clearInterval(timer.current);
      timer.current = setInterval(play, (60 / bpm) * 1000);
    } else {
      clearInterval(timer.current);
    }
  }, [bpm, playing]);

  const startStop = () => {
    if (playing) {
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  };

  const bpmChangeHandler = (e) => {
    setBpm(e.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Metronome</h1>
      </div>
      <form className="form">
        <div className="form-label">
          <label htmlFor="volume">{bpm} BPM</label>
        </div>
        <div className="form-input">
          <input
            type="range"
            name="volume"
            min="40"
            max="200"
            step="1"
            value={bpm}
            onChange={bpmChangeHandler}
          />
        </div>
      </form>
      <div className="btn">
        <button onClick={startStop}>{playing ? "Stop" : "Start"}</button>
      </div>
    </div>
  );
}

export default App;
