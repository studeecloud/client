import { createContext, useState, useEffect, useMemo, useContext } from 'react';

const TimerContext = createContext({});

function TimerProvider({ children }) {
  //STATE MANAGEMENT: States related to Timer in Title Panel
  //TODO: Refactor by packaging into single object
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  const [secondsLeft, setSecondsLeft] = useState(0); //Each mode has independent secondsLeft state
  const [isPaused, setIsPaused] = useState(true); //Used by pause & play buttons on timer
  const [mode, setMode] = useState('work'); // "Work" and "Play" alternate once timer reaches 0

  // Initializes timer with "work" mode first
  useEffect(() => {
    function initTimer() {
      setSecondsLeft(workMinutes * 60);
    }
    initTimer();
  }, [workMinutes]);

  // Tracks secondsLeft for both modes
  useEffect(() => {
    function switchMode() {
      const nextMode = mode === 'work' ? 'break' : 'work';
      setMode(nextMode);
      setSecondsLeft(
        nextMode === 'work' ? workMinutes * 60 : breakMinutes * 60
      );
    }

    //HELPER FUNCTITON: Decrement timer helper function
    function tick() {
      setSecondsLeft((prev) => prev - 1);
    }

    //MAIN FUNCTION controlling timer countdown for both modes
    const countDownTimer = setInterval(() => {
      if (isPaused) {
        return;
      }
      if (secondsLeft === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(countDownTimer);
  }, [isPaused, secondsLeft, workMinutes, mode, breakMinutes]);

  // MAIN FUNCTION: plays if paused and pauses if playing. Simplifies logic by sending the same function to both play and pause buttons
  const togglePlay = () => {
    if (isPaused) {
      setIsPaused(false);
      return;
    }
    setIsPaused(true);
  };

  const value = useMemo(
    () => ({
      showSettings,
      setShowSettings,
      workMinutes,
      setWorkMinutes,
      breakMinutes,
      setBreakMinutes,
      secondsLeft,
      setSecondsLeft,
      isPaused,
      setIsPaused,
      mode,
      setMode,
      togglePlay,
    }),
    [showSettings, workMinutes, breakMinutes, secondsLeft, isPaused, mode]
  );

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}
export const useTimer = () => useContext(TimerContext);
export { TimerProvider };
