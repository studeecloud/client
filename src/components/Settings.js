import { useTimer } from '../context/TimerContext';

import ReactSlider from 'react-slider';

import './slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Settings() {
  // setShowSettings is booelan
  // workMinutes & setWorkMinutes and breakMinutes & setBreakMinutes are numbers
  const {
    setShowSettings,
    workMinutes,
    setWorkMinutes,
    breakMinutes,
    setBreakMinutes,
    secondsLeft,
    setSecondsLeft,
  } = useTimer();

  return (
    <div className="w-40" style={{ textAlign: 'left' }}>
      <label>work: {workMinutes} </label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={workMinutes}
        onChange={(newValue) => setWorkMinutes(newValue)}
        min={1}
        max={60}
      />
      <label>break: {breakMinutes} </label>
      <ReactSlider
        className={'slider break'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={breakMinutes}
        onChange={(newValue) => setBreakMinutes(newValue)}
        min={1}
        max={60}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          className="btn btn-primary"
          onClick={() => setShowSettings(false)}
        >
          <FontAwesomeIcon icon={solid('clock')} className="h-7" />{' '}
        </button>
      </div>
    </div>
  );
}
