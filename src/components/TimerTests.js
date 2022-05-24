import React from 'react';
import '../App.css';
import { useTimer } from 'use-timer';


export default function Timer() {
  let startTime = 3000

  // ISSUE: Initial Declaration is set with the hoook configuration
  // need to implement a state change
  // Insert toggle button as prop and code into App.JS, with ability to change state
  // Timer inital value becomes a prop
  const { time, start, pause, reset, status } = useTimer({
      timerType: 'DECREMENTAL',
      initialTime: startTime,
      endTime: 0,
      onTimeOver: () => {
        console.log('Time is over');
      },
    });


    const min = Math.floor(time/60)
    const sec = (time - min * 60).toString().padStart(2, "0")



    const startPauseButton = () => {
      if(status === "RUNNING"){
        return <button className="btn btn-primary" onClick={pause}>Pause</button>
      } else {
        return <button className="btn btn-primary" onClick={start}>Start</button>

      }
    }

    const toggleTimer = () => {
        startTime = 1500
        console.log("this is start time", startTime);
    };

  return(
    <div>
        <div>
          {startPauseButton()}
          <button className="btn btn-primary" onClick={reset}>Reset</button>
          <button className="btn btn-primary" onClick={toggleTimer}>Toggle</button>
        </div>
        <h2> {min}:{sec} </h2>
        {status === 'RUNNING' && <p>Running...</p>}
    </div>
  )
}