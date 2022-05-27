import { useState } from 'react';

import TimerButtonPanel from './TimerButtonPanel';
import { useInterval } from '../../hooks';

export default function Timer() {
  // This tracks whether whether we are displaying the settings buttons
  const [showSettings, setShowSettings] = useState(false);

  // This tracks whether the timer is running
  const [isActive, setIsActive] = useState(false);

  // These two track the max time and the remaining time of the timer
  const [maxSeconds, setMaxSeconds] = useState(900);
  const [seconds, setSeconds] = useState(maxSeconds);

  useInterval(() => {
    if (isActive && seconds > 0) {
      setSeconds(seconds - 1);
    }
  }, 1000);

  const resetTimer = () => {
    setSeconds(maxSeconds);
    setIsActive(false);
  };

  const toggleTimer = () => {
    if (isActive) {
      setIsActive(false);
      return;
    }
    setIsActive(true);
  };

  const toggleSettings = () => {
    if (showSettings) {
      setShowSettings(false);
      return;
    }
    setShowSettings(true);
  };

  const addMinutes = (mins) => {
    if (seconds + mins * 60 <= 5999 && seconds + mins * 60 >= 0) {
      setMaxSeconds((prev) => prev + mins * 60);
      setSeconds((prev) => prev + mins * 60);
    }
  };

  return (
    <main className="w-full px-7 py-3 flex flex-col border-2 rounded-xl text-meringue bg-teal">
      <span
        id="timerDisplay"
        className="mt-1 mb-4 font-accent text-4xl text-center"
      >
        {Math.floor(seconds / 60)
          .toString()
          .padStart(2, '0')}
        :{(seconds % 60).toString().padStart(2, '0')}
      </span>
      <TimerButtonPanel
        isActive={isActive}
        resetTimer={resetTimer}
        toggleTimer={toggleTimer}
        addMinutes={addMinutes}
        showSettings={showSettings}
        toggleSettings={toggleSettings}
      />
    </main>
  );
}
