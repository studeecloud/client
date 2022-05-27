import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useInterval } from '../hooks';

export default function PomodoroTimer() {
  const [showSettings, setShowSettings] = useState(false);
  const [isActive, setIsActive] = useState(false);
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

  const addMins = (mins) => {
    if (seconds + mins * 60 <= 5999) {
      setMaxSeconds((prev) => prev + mins * 60);
      setSeconds((prev) => prev + mins * 60);
    }
  };

  const subtractMins = (mins) => {
    if (seconds - mins * 60 >= 0) {
      setMaxSeconds((prev) => prev - mins * 60);
      setSeconds((prev) => prev - mins * 60);
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
      <div className="flex justify-around items-center">
        <button id="timerSettingsButton">
          <FontAwesomeIcon
            icon={solid('gear')}
            onClick={toggleSettings}
            className="h-7"
          />
        </button>

        {showSettings ? (
          <>
            <button
              id="add5Min"
              className="py-0.5 px-1.5 rounded rounded-full bg-meringue text-teal "
              onClick={() => subtractMins(5)}
            >
              -5
            </button>
            <button
              id="subtract5Min"
              className="py-0.5 px-1.5 rounded rounded-full bg-meringue text-teal "
              onClick={() => addMins(5)}
            >
              +5
            </button>
          </>
        ) : (
          <>
            <button id="timerPlayButton" onClick={toggleTimer} className="">
              {isActive ? (
                <FontAwesomeIcon icon={solid('circle-pause')} className="h-7" />
              ) : (
                <FontAwesomeIcon icon={solid('circle-play')} className="h-7" />
              )}
            </button>
            <button id="timerResetButton" onClick={resetTimer} className="">
              <FontAwesomeIcon icon={solid('rotate-right')} className="h-7" />
            </button>
          </>
        )}
      </div>
    </main>
  );
}
