import { useEffect } from 'react';
import { useTimer } from '../context/TimerContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';

import PianoSound from './PianoSound';
import RainSound from './RainSound';
import StringSound from './StringSound';

export default function SoundPanel({ onSelect }) {
  return (
    <section className="dashboard__panel relative border bg-meringue">
      <button
        type="button"
        className="absolute"
        style={{ top: '3.5%', right: '2%' }}
        onClick={onSelect}
      >
        <FontAwesomeIcon icon={solid('expand')} className="h-7" />
      </button>

      <h1 className="mt-3 mb-5 font-display text-4xl text-center">
        Soundboard
      </h1>
      <h2 className="font-body text-lg text-center">SFX</h2>
      <StringSound />
      <RainSound />
      <PianoSound />
    </section>
  );
}
