import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementHours, incrementMinutes, incrementSeconds, addMeasurement } from "../store";

function Timer() {
  const { hours, minutes, seconds, measurements } = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  return (
    <div className="timer-container">
      <div className="time-controls">
        <div>
          <h1>{hours.toString().padStart(2, "0")}</h1>
          <button onClick={() => dispatch(incrementHours())}>+</button>
        </div>
        <div>
          <h1>{minutes.toString().padStart(2, "0")}</h1>
          <button onClick={() => dispatch(incrementMinutes())}>+</button>
        </div>
        <div>
          <h1>{seconds.toString().padStart(2, "0")}</h1>
          <button onClick={() => dispatch(incrementSeconds())}>+</button>
        </div>
      </div>
      <button className="save-btn" onClick={() => dispatch(addMeasurement())}>Saxla</button>
      <div className="measurements">
        <h2>Keçmiş ölçmələr</h2>
        <ul>
          {measurements.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Timer;
