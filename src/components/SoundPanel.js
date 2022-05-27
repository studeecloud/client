import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useSound } from '../context/SoundContext';
import Sound from './Sound';
import PomodoroTimer from './PomodoroTimer';

/**
 * @param {Array} soundData -- array of objects with Integer key 'id' and String keys 'file' and 'name'
 *   @key {Integer} id -- unique ID identifying the sound
 *   @key {String} file -- file name on the server, appended to /public/
 *   @key {String} name -- the sound's display name
 */

export default function SoundPanel({ soundData }) {
  const { toggleSound, isPlaying } = useSound();
  const [selectedSound, setSelectedSound] = useState('');

  const selectSound = (file) => {
    setSelectedSound(file);
  };

  const sounds = soundData.map((sound) => {
    return (
      <Sound
        key={sound.id}
        {...sound}
        selectSound={() => selectSound(sound.file)}
        isSelected={sound.file === selectedSound}
      />
    );
  });

  return (
    <section className="dashboard__panel relative border bg-meringue">
      <div className="flex h-full">
        <div className="w-1/2 h-full flex flex-col items-center justify-between">
          <div className="w-1/2">
            <h1 className="mt-6 mb-2 font-display text-teal text-4xl text-center">
              Sounds
            </h1>
          </div>

          <div className="w-7/12 px-6 py-8 my-auto flex flex-col justify-around text-meringue bg-teal border-2 rounded-xl">
            {sounds}
            <button
              onClick={() => toggleSound(selectedSound)}
              className="align-middle"
            >
              {isPlaying ? (
                <FontAwesomeIcon
                  icon={solid('circle-pause')}
                  className="h-10"
                />
              ) : (
                <FontAwesomeIcon icon={solid('circle-play')} className="h-10" />
              )}
            </button>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center">
          <div className="w-1/2">
            <h1 className="mt-6 mb-2 font-display text-teal text-4xl text-center">
              Timer
            </h1>
          </div>

          <div className="flex items-center h-full py-8">
            <PomodoroTimer />
          </div>
        </div>
      </div>
    </section>
  );
}
