import { useSound } from '../context/SoundContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function PianoSound() {
  const { piano, setPiano, setSrc } = useSound();

  //Setsplaying state to true through HELPER FUNCTION in SoundContext.js
  const playSound = () => {
    setSrc('https://studeecloud-server.herokuapp.com/public/Piano.mp3');
    setPiano(true);
  };

  const pauseSound = () => {
    setPiano(false);
  };

  return (
    <section className="flex flex-row justify-between items-center">
      <div>
        <h1 className="font-body text-2xl text-center">Piano</h1>
      </div>
      <div>
        {piano ? (
          <button onClick={pauseSound} className="align-middle">
            <FontAwesomeIcon icon={solid('circle-pause')} className="h-5" />
          </button>
        ) : (
          <button onClick={playSound} className="align-middle">
            <FontAwesomeIcon icon={solid('circle-play')} className="h-5" />
          </button>
        )}
      </div>
    </section>
  );
}
