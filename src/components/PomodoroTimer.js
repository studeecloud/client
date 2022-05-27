import { useTimer } from '../context/TimerContext';

import Settings from './Settings';
import Timer from './Timer';

export default function PomodoroTimer() {
  const { showSettings } = useTimer();

  return (
    <main className="w-full">{showSettings ? <Settings /> : <Timer />}</main>
  );
}
